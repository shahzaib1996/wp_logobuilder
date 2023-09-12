<?php
if (!defined('WPINC')){
  header('Location: /');
  exit();
}


if( isset($_POST['updated']) && $_POST['updated'] === 'true' ){
if( ! isset( $_POST['bby_settings_form'] ) || ! wp_verify_nonce( $_POST['bby_settings_form'], 'bby_settings_form_update' ) ){ ?>
 <div class="error">
     <p>Something went wrong. Please reload the page.</p>
 </div> <?php
 exit;
} else {
      $receivedByPOSTdata = $_POST;
      $storedData = get_option('bby_admin');
      $receivedByPOSTdata = bbyParseJSONtoArray(stripslashes($receivedByPOSTdata['text']));
      //update_option('bby_admin', (updateJSONvalues($storedData, $receivedByPOSTdata)));
      if (!bbyUpdateSettings($receivedByPOSTdata, $storedData)){
      } else {?>

        <div class="updated">
            <p>Your fields were saved!</p>
        </div>

      <?php }
}
}



?>

<div id="app"></div>

<script type='text/javascript' src='/wp-content/plugins/logobuilderboy/inc/admin/src/js/script.js'></script>
<script type='text/javascript' src='/wp-content/plugins/logobuilderboy/inc/admin/app/dist/js/app.69c285bc.js' id='wpvue_page_vuejs-js'></script>
<script type='text/javascript' src='/wp-content/plugins/logobuilderboy/inc/admin/app/dist/js/chunk-vendors.4e56510b.js' id='wpvue_page_vuejs1-js'></script>
