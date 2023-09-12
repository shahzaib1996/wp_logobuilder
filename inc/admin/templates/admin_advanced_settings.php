<?php
if (!defined('WPINC')){
  header('Location: /');
  exit();
}
settings_errors(); ?>


<?php
// Handling POST
  if( isset($_POST['updated']) && $_POST['updated'] === 'true' ){
  if( ! isset( $_POST['bby_advanced_settings_form'] ) || ! wp_verify_nonce( $_POST['bby_advanced_settings_form'], 'bby_advanced_settings_form_update' ) ){ ?>
   <div class="error">
       <p>Something went wrong. Please reload the page.</p>
   </div> <?php
   exit;
} else {
        ?>
        <?php
        global $BBY_CONFIGS;
        if (isset($_POST['json'])){
          $fullArray = json_decode(stripslashes($_POST['json']), true);
          if (!json_last_error()){
            $receivedByPOSTdata = $fullArray['Logo'];
          } else {
            echo '<div class="error">
                  <p>Provided data was not a valid JSON. Please reload the page.</p>
                  </div>';
            exit;
          }
        } else {
          $receivedByPOSTdata = bbyStripSlashesDeep(array_slice($_POST, 4));
        }
        $spaceType = $_POST['platform'];
        $storedData = get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType);
        update_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType, bbyUpdateJSONvalues($storedData, $receivedByPOSTdata));
        ?>
        <div class="updated">
            <p>Your new setting was saved.</p>
        </div>
        <?php
}
}
//
?>

<!-- header -->
  <div data-v-2ebe385b="" class="header container-fluid">
     <header data-v-2ebe385b="" class="row">
        <div data-v-2ebe385b="" class="bby-header col-sm bby-style-flex bby-row bby-space-between bby-center">
           <div data-v-2ebe385b="">
              <a data-v-2ebe385b="" href="#">
                 <div data-v-46abeb6f="" data-v-2ebe385b="">
                    <svg data-v-46abeb6f="" width="200" height="50" fill="#444444" class="icon">
                       <use data-v-46abeb6f="" xlink:href="/wp-content/uploads/builderboy/assets/bby-icons.svg?ver=1.0.2#bbyLogoCreatorWhite"></use>
                    </svg>
                 </div>
              </a>
           </div>
        </div>
     </header>
  </div>


<?php

function bbyGetJSONvalues($arr, $categoryName = ''){
  $rawArraySelectedValues = array();
  if (!is_array($arr)){
    die('This is not an array!');
  }

  foreach ($arr as $key => $value) {
    if (isset($value['name']) && isset($value['isActive'])){
      $categoryName = $value['name'];
    }
    if ($key === 'component' && $value['hideInAdvancedPage'] === 'false'){
      $rawArraySelectedValues[$categoryName][$value['name']] = $value['selected_value'];
    }
    if (is_array($value)) {
      $rawArraySelectedValues=array_replace_recursive($rawArraySelectedValues, bbyGetJSONvalues($value, $categoryName));
    }
  }
  return $rawArraySelectedValues;
}

function bbyStripSlashesDeep($value){
    $value = is_array($value) ?
                array_map('bbyStripSlashesDeep', $value) :
                stripslashes($value);

    return $value;
}

function bbyUpdateJSONvalues(array $arr, array $newValues){
    foreach ($arr as $key => $val) {
        if (!is_array($val)) {
            continue;
        }
        if (isset($val['name'], $newValues[$val['name']])) {
            $val['selected_value'] = $newValues[$val['name']];
        }
        $arr[$key] = bbyUpdateJSONvalues($val, $newValues);
    }
    return $arr;
}


// DON'T LOOK HERE, THIS IS CRAPPY

function bbyPrintHtmlValuesRecursive($data, int $iteration = -1, string $parentName = '', int $cssCounter = 0){
  if (is_array($data)){
    $iteration++;
    foreach ($data as $key => $value){
      if ($cssCounter % 2 == 0) {
        $rowType = 'even';
        $cssCounter++;
      } else {
        $rowType = 'odd';
        $cssCounter++;
      }
      echo "<tr class=\"bby-rowKey-" . $rowType . "\"><td style=\"text-indent: " . 50 * $iteration . "px;\">";
      echo $key;
        if (is_array($value)){
          if (empty($value)){
          echo "<td style=\"text-align:center;\">";
          echo "<input type=\"text\" name=\"" . $key . "\"value=\"\">";
          echo "</td>";
        } else {
          echo "<td style=\"text-align:center;\">";
          echo "<input type=\"text\" style=\"visibility: hidden\">";
          echo "</td>";
          if ($parentName == ''){
          bbyPrintHtmlValuesRecursive($value, $iteration, $key, $cssCounter);
        } else {
          bbyPrintHtmlValuesRecursive($value, $iteration, $parentName . "[" . $key . "]", $cssCounter);
        }
        }
        } else {
          echo "<td style=\"text-align:center;\">";
          if ($parentName == ''){
            echo "<textarea name=\"". $key . "\" rows=\"1\">".stripslashes($value)."</textarea>";
          } else {
            echo "<textarea name=\"". $parentName . "[" . $key . "]" . "\" rows=\"1\">".stripslashes($value)."</textarea>";
          }
          echo "</td>";
        }
      echo "</td></tr>";
    }
  }
}

function bbyShowStoreConfig(string $spaceType = ''){
  global $BBY_CONFIGS;

  $data = bbyGetJSONvalues(get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType));
  echo "<input type=\"hidden\" name=\"platform\" value=\"".$spaceType."\" />";
  foreach ($data as $categoryName => $categoryValue){
      echo "<tr><td><h2>".$categoryName."</h2></td></tr>";
      echo "<th style=\"text-align: left\">Key</th>";
      echo "<th style=\"text-align: center\">Value</th></tr>";
    if (is_array($categoryValue)){
      bbyPrintHtmlValuesRecursive($categoryValue);
    }
  }
}

function bbyShowStoreJSONConfig(string $spaceType = ''){
  global $BBY_CONFIGS;

  $data = bbyGetJSONvalues(get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType));
  echo "<input type=\"hidden\" name=\"platform\" value=\"".$spaceType."\" />";
  echo "<textarea name=\"json\" rows=\"50\" cols=\"100\">".json_encode($data, JSON_PRETTY_PRINT)."</textarea>";
}
 // TOLD YOU :-)
?>


<div class="tab">
  <button class="tablinks" onclick="openStore(event, 'HTML')" id="defaultOpen">HTML</button>
  <button class="tablinks" onclick="openStore(event, 'JSON')">JSON</button>
</div>

<!-- Tab content -->
<div id="HTML" class="tabcontent">
  <h3>HTML Settings</h3>
  <form id="bbyUpdateValuesHTML" method="post" class="test-general-form">
    <input type="hidden" name="updated" value="true" />
    <?php wp_nonce_field( 'bby_advanced_settings_form_update', 'bby_advanced_settings_form' ); ?>
    <center><table class="bby-table"><tr>

      <?php
      bbyShowStoreConfig();
      ?>
  </table></center>
  </form>
</div>

<div id="JSON" class="tabcontent">
  <h3>JSON Settings</h3>
  <form id="bbyUpdateValuesJSON" method="post" class="test-general-form">
    <input type="hidden" name="updated" value="true" />
    <?php wp_nonce_field( 'bby_advanced_settings_form_update', 'bby_advanced_settings_form' ); ?>
    <center><table style="width:100%"><tr>

      <?php
      bbyShowStoreJSONConfig();
      ?>
  </table></center>
  </form>
</div>

<!-- footer -->
<div data-v-0d8bd469="" class="bby-column">
   <div data-v-0d8bd469="" class="footer container-fluid">
      <footer data-v-0d8bd469="" class="row">
         <div data-v-0d8bd469="" class="bby-footer col-sm bby-style-flex bby-space-between bby-center">
            <div data-v-0d8bd469="" class="bby-footer-copyright"> © BuilderBoy.co. All rights reserved. </div>
            <ul data-v-0d8bd469="" class="bby-footer-social-contact bby-row bby-center">
               <li data-v-0d8bd469="">
                  <a data-v-0d8bd469="" href="https://builderboy.co/rd/facebook">
                     <div data-v-46abeb6f="" data-v-0d8bd469="">
                        <svg data-v-46abeb6f="" width="20" height="20" fill="#C2C2C2" class="icon">
                           <use data-v-46abeb6f="" xlink:href="/wp-content/uploads/builderboy/assets/bby-icons.svg?ver=1.0.2#facebook"></use>
                        </svg>
                     </div>
                  </a>
               </li>
               <li data-v-0d8bd469="">
                  <a data-v-0d8bd469="" href="https://builderboy.co/rd/instagram">
                     <div data-v-46abeb6f="" data-v-0d8bd469="">
                        <svg data-v-46abeb6f="" width="20" height="20" fill="#C2C2C2" class="icon">
                           <use data-v-46abeb6f="" xlink:href="/wp-content/uploads/builderboy/assets/bby-icons.svg?ver=1.0.2#instagram"></use>
                        </svg>
                     </div>
                  </a>
               </li>
               <li data-v-0d8bd469="">
                  <a data-v-0d8bd469="" href="https://builderboy.co/rd/behance">
                     <div data-v-46abeb6f="" data-v-0d8bd469="">
                        <svg data-v-46abeb6f="" width="20" height="20" fill="#C2C2C2" class="icon">
                           <use data-v-46abeb6f="" xlink:href="/wp-content/uploads/builderboy/assets/bby-icons.svg?ver=1.0.2#behance"></use>
                        </svg>
                     </div>
                  </a>
               </li>
               <li data-v-0d8bd469="">
                  <a data-v-0d8bd469="" href="https://builderboy.co/rd/contact">
                     <div data-v-46abeb6f="" data-v-0d8bd469="">
                        <svg data-v-46abeb6f="" width="20" height="20" fill="#C2C2C2" class="icon">
                           <use data-v-46abeb6f="" xlink:href="/wp-content/uploads/builderboy/assets/bby-icons.svg?ver=1.0.2#bbyMail"></use>
                        </svg>
                     </div>
                  </a>
               </li>
            </ul>
            <button onclick="submit(event)" class="bby-button bby-button-medium  bby-bg-primaryIndigo">Save changes</button>
         </div>
      </footer>
   </div>
</div>

<script>
document.getElementById("defaultOpen").click();



function submit(evt){
  document.getElementById('bbyUpdateValues' + document.selectedTab).submit();
}

function openStore(evt, storeName) {
  document.selectedTab = storeName;
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(storeName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

<style>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

tr.bby-rowKey-odd {
  background-color:#f1f1f1;
  line-height:3;
}

tr.bby-rowKey-even {
  background-color:#f4f4f4;
  line-height:3;
}
table.bby-table {
  border-collapse:collapse;
  width:100%;
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

*, ::before, ::after {
     box-sizing: border-box;
}
.header {
     background: rgb(35, 40, 45);
     padding: 1.25rem 0px;
}
*, ::before, ::after {
     box-sizing: inherit;
}
.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
     width: 100%;
     padding-right: 15px;
     margin-right: auto;
     margin-left: auto;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
     display: block;
}
.row {
     display: flex;
     flex-wrap: wrap;
     margin-left: -15px;
}
.bby-style-flex {
     display: flex;
     flex: 1 0 auto;
}
.bby-style-flex.bby-row {
     flex-direction: row;
}
.bby-style-flex.bby-center {
     align-items: center;
}
.bby-style-flex.bby-space-between {
     justify-content: space-between;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
     position: relative;
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
}
a {
     color: rgb(0, 123, 255);
     text-decoration: none;
     background-color: transparent;
}
a:hover {
     color: rgb(0, 86, 179);
     text-decoration: underline;
}
.wp-person a:focus .gravatar, a:focus, a:focus .media-icon img {
     box-shadow: none !important;
     outline: none !important;
}
svg {
     overflow: hidden;
     vertical-align: middle;
}
button {
     border-radius: 0px;
}
button:focus {
     outline: 0px !important;
}
input, button, select, optgroup, textarea {
     margin: 0px;
     font-family: inherit;
     font-size: inherit;
     line-height: inherit;
     border: 0px;
     box-shadow: none;
     outline: none !important;
}
button, input {
     overflow: visible;
}
button, select {
     text-transform: none;
}
.bby-icon-button.bby-no-bg {
     background: transparent !important;
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 576px){
    .col-sm {
         flex-basis: 0px;
         flex-grow: 1;
         max-width: 100%;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    button, input, select, textarea {
         box-sizing: border-box;
         font-family: inherit;
         font-size: inherit;
         font-weight: inherit;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}

*, ::before, ::after {
     box-sizing: border-box;
}
*, ::before, ::after {
     box-sizing: inherit;
}
.footer {
     background: rgb(35, 40, 45);
     padding: 1.25rem 0px;
}
.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
     margin-right: auto;
     margin-left: auto;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
     display: block;
}
.bby-style-flex {
     display: flex;
     flex: 1 0 auto;
}
.bby-style-flex.bby-center {
     align-items: center;
}
.bby-style-flex.bby-space-between {
     justify-content: space-between;
}
.bby-footer {
     flex-direction: column-reverse;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
     position: relative;
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
}
.bby-footer .bby-footer-copyright {
     font-size: 0.7rem;
     color: rgb(194, 194, 194);
     margin-top: 1rem;
}
ol, ul, dl {
     margin-top: 0px;
     margin-bottom: 1rem;
}
.bby-footer-social-contact {
     margin-top: 2.5rem;
     display: flex;
}
.bby-footer-social-contact li {
     margin: 0px 8px;
}
a {
     color: rgb(0, 123, 255);
     text-decoration: none;
     background-color: transparent;
}
a:hover {
     color: rgb(0, 86, 179);
     text-decoration: underline;
}
.wp-person a:focus .gravatar, a:focus, a:focus .media-icon img {
     box-shadow: none !important;
     outline: none !important;
}
svg {
     overflow: hidden;
     vertical-align: middle;
}
.bby-bg-primaryIndigo {
     background: rgb(111, 42, 245) !important;
     color: rgb(255, 255, 255) !important;
}
.bby-bg-primaryIndigo:hover {
     background: rgb(66, 14, 168) !important;
}
button {
     border-radius: 0px;
}
button:focus {
     outline: 0px !important;
}
input, button, select, optgroup, textarea {
     margin: 0px;
     font-family: inherit;
     font-size: inherit;
     line-height: inherit;
     border: 0px;
     box-shadow: none;
     outline: none !important;
}
button, input {
     overflow: visible;
}
button, select {
     text-transform: none;
}
.bby-button {
     letter-spacing: 1.1px;
     text-transform: uppercase;
     font-weight: 400;
     transition: background 500ms ease 0s;
     border-radius: 4px;
}
.bby-button-medium {
     font-size: 14px;
     padding: 0.625em 1em;
}
*, ::before, ::after {
     box-sizing: border-box;
}
*, ::before, ::after {
     box-sizing: inherit;
}
.footer {
     background: rgb(35, 40, 45);
     padding: 1.25rem 0px;
}
.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
     margin-right: auto;
     margin-left: auto;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
     display: block;
}
.bby-style-flex {
     display: flex;
     flex: 1 0 auto;
}
.bby-style-flex.bby-center {
     align-items: center;
}
.bby-style-flex.bby-space-between {
     justify-content: space-between;
}
.bby-footer {
     flex-direction: column-reverse;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
     position: relative;
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
}
.bby-footer .bby-footer-copyright {
     font-size: 0.7rem;
     color: rgb(194, 194, 194);
     margin-top: 1rem;
}
ol, ul, dl {
     margin-top: 0px;
     margin-bottom: 1rem;
}
.bby-footer-social-contact {
     margin-top: 2.5rem;
     display: flex;
}
.bby-footer-social-contact li {
     margin: 0px 8px;
}
a {
     color: rgb(0, 123, 255);
     text-decoration: none;
     background-color: transparent;
}
a:hover {
     color: rgb(0, 86, 179);
     text-decoration: underline;
}
.wp-person a:focus .gravatar, a:focus, a:focus .media-icon img {
     box-shadow: none !important;
     outline: none !important;
}
svg {
     overflow: hidden;
     vertical-align: middle;
}
.bby-bg-primaryIndigo {
     background: rgb(111, 42, 245) !important;
     color: rgb(255, 255, 255) !important;
}
.bby-bg-primaryIndigo:hover {
     background: rgb(66, 14, 168) !important;
}
button {
     border-radius: 0px;
}
button:focus {
     outline: 0px !important;
}
input, button, select, optgroup, textarea {
     margin: 0px;
     font-family: inherit;
     font-size: inherit;
     line-height: inherit;
     border: 0px;
     box-shadow: none;
     outline: none !important;
}
button, input {
     overflow: visible;
}
button, select {
     text-transform: none;
}
.bby-button {
     letter-spacing: 1.1px;
     text-transform: uppercase;
     font-weight: 400;
     transition: background 500ms ease 0s;
     border-radius: 4px;
}
.bby-button-medium {
     font-size: 14px;
     padding: 0.625em 1em;
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer {
         flex-direction: row;
    }
}
@media (min-width: 576px){
    .col-sm {
         flex-basis: 0px;
         flex-grow: 1;
         max-width: 100%;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer .bby-footer-copyright {
         margin-top: 0px !important;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer-social-contact {
         margin-bottom: 0px !important;
         margin-top: 0px !important;
    }
}
@media all{
    ol, ul {
         padding: 0px;
    }
}
@media all{
    ul {
         list-style: none;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    button, input, select, textarea {
         box-sizing: border-box;
         font-family: inherit;
         font-size: inherit;
         font-weight: inherit;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer {
         flex-direction: row;
    }
}
@media (min-width: 576px){
    .col-sm {
         flex-basis: 0px;
         flex-grow: 1;
         max-width: 100%;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer .bby-footer-copyright {
         margin-top: 0px !important;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer-social-contact {
         margin-bottom: 0px !important;
         margin-top: 0px !important;
    }
}
@media all{
    ol, ul {
         padding: 0px;
    }
}
@media all{
    ul {
         list-style: none;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    button, input, select, textarea {
         box-sizing: border-box;
         font-family: inherit;
         font-size: inherit;
         font-weight: inherit;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer {
         flex-direction: row;
    }
}
@media (min-width: 576px){
    .col-sm {
         flex-basis: 0px;
         flex-grow: 1;
         max-width: 100%;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer .bby-footer-copyright {
         margin-top: 0px !important;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media (min-width: 600px){
    .bby-footer-social-contact {
         margin-bottom: 0px !important;
         margin-top: 0px !important;
    }
}
@media all{
    ol, ul {
         padding: 0px;
    }
}
@media all{
    ul {
         list-style: none;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    dd, li {
         margin-bottom: 6px;
    }
}
@media all{
    a {
         color: rgb(34, 113, 177);
         transition-property: border, background, color;
         transition-duration: 0.05s;
         transition-timing-function: ease-in-out;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    a, div {
         outline: 0px;
    }
}
@media all{
    button, input, select, textarea {
         box-sizing: border-box;
         font-family: inherit;
         font-size: inherit;
         font-weight: inherit;
    }
}
</style>
