<?php

/*
Plugin Name: Logo Builder Boy
Plugin URI: https://builderboy.co
Author: Builder Boy Team
Author URI: https://builderboy.co
Description: A new approach for making astonishing website logos.
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.en.html
Tags: theme, wordpress, clean, test, minimal, custom admin options, logo, create
*/

if (!defined('WPINC')){
  header('Location: /');
  exit();
}


require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/response_handling.php');
// Client functions
// Provide JSON data
function bbyGetFonts(){
      global $BBY_CONFIGS;
      include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/jsonParser.php';
      header("Content-type: application/json");
      header("Pragma: no-cache");
      header("Expires: 0");
      $jsonRaw=$BBY_CONFIGS['internal']['workingDir'] . $BBY_CONFIGS['internal']['fonts']['fontsJSONpath'];
      $json=bbyParseJSONfiletoArray($jsonRaw);
      $storedFonts = get_option('bby_admin_fonts'.$BBY_CONFIGS['optionStore']);
      if (!$storedFonts){
        header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
        echo bbyPrintError('HTTP 404 Fonts Not found');
        exit();
      }
      $numberOfStoredFonts = count($storedFonts['items']);

      $returnedFonts = array(
          "kind" => "webfonts#webfontList",
          "items" => array()
      );

      foreach ($json['family'] as $key => $value){
        for ($i = 0; $i <= $numberOfStoredFonts-1; $i++){
          if ($storedFonts['items'][$i]['family'] === $value){
            array_push($returnedFonts['items'], $storedFonts['items'][$i]);
          }
        }
      }
      echo bbyPrintSuccess($returnedFonts);
      exit();
}

// Provide JSON data
function bbyGetIcons(){
      global $BBY_CONFIGS;
      header("Content-type: application/json");
      header("Pragma: no-cache");
      header("Expires: 0");
      $storedIcons = get_option('bby_admin_icons'.$BBY_CONFIGS['optionStore']);
      if (!$storedIcons){
        header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
        echo bbyPrintError('HTTP 404 Icons Not found');
        exit();
      } else {
        echo bbyPrintSuccess($storedIcons);
        exit();
      }
}

// Provide JSON data
function bbyGetJson(string $spaceType){
      global $BBY_CONFIGS;

      header("Content-type: application/json");
      header("Pragma: no-cache");
      header("Expires: 0");

      $jsonValues = get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType);
      // print_r($jsonValues);
      // exit();
      if (!$jsonValues){
        header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
        echo bbyPrintError('JSON database not found.');
        exit();
      } else {
        echo bbyPrintSuccess($jsonValues);
        exit();
      }
}

// Receive JSON updates
function bbyPostJson(string $spaceType){
  global $BBY_CONFIGS;
  include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/jsonParser.php';
  parse_str($_SERVER['QUERY_STRING'], $queryString);
  if ($queryString) {
        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
          global $wp_filesystem;
          WP_Filesystem();
          $raw_post_data =  $wp_filesystem->get_contents('php://input');
          $receivedByPOSTdata = bbyParseJSONtoArray($raw_post_data);
          $storedData = get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType);
          if (!bbyUpdateSettings($receivedByPOSTdata, $storedData, $spaceType)){
            header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
            echo bbyPrintError('Data update failed. Structure mismatch. Please revert to default values');
          } else {
            $response = array (
              'message' => 'Database updated successfully'
            );
            echo bbyPrintSuccess($response);
          }
          exit();
      } else {
          header($_SERVER["SERVER_PROTOCOL"]." 405 Method Not Allowed", true, 405);
          echo bbyPrintError('HTTP 405 Method Not Allowed');
          exit();
      }
}
}

// Save generated logo
function bbyUploadGeneratedLogo(){
  global $BBY_CONFIGS;
  require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/modifiers.php');
  parse_str($_SERVER['QUERY_STRING'], $queryString);
  if ($queryString) {
        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
          global $wp_filesystem;
          WP_Filesystem();
          $raw_post_data =  $wp_filesystem->get_contents('php://input');
          add_filter('upload_dir', 'bbyChangeUploadDir');
          $uploadDir = wp_upload_dir();
          $logoUploadDir = $uploadDir['path'] . "/logo";
          if (file_get_contents($raw_post_data)){
            $logoFile = file_get_contents($raw_post_data);
            $logoFileDetails = getimagesizefromstring($logoFile);
            $logoFileExtension = explode("/", $logoFileDetails['mime']);
            if (!file_exists($logoUploadDir)) {
              mkdir($logoUploadDir . "/logo", 0775, true);
            }

            $microtime = md5(microtime());
            $logoFileName = "logo_" . substr($microtime, 0, 6);
            $logoFullPath = $logoUploadDir . "/" . $logoFileName . "." . $logoFileExtension[1];
            $saveLogo = file_put_contents($logoFullPath, $logoFile);
            $logoFileType = wp_check_filetype($logoFullPath);
            $attachment = array(
          		'post_mime_type' => $logoFileType['type'],
          		'post_title'     => "Logo",
          		'post_content'   => 'Logo created by Logo BuilderBoy',
          		'post_status'    => 'inherit',
          	  'guid'           => $logoFullPath
          	);
            $attach_id = wp_insert_attachment($attachment, $logoFullPath);
            if ($attach_id){
              wp_generate_attachment_metadata($attach_id, $logoFullPath);
              $logoImageURL = wp_get_attachment_url($attach_id);
              $response = array (
                'message' => 'Logo uploaded successfully',
                'ImageURL' => $logoImageURL
              );
              echo bbyPrintSuccess($response);
            }
          }
          remove_filter('upload_dir', 'bbyChangeUploadDir');
          exit();
      } else {
          header($_SERVER["SERVER_PROTOCOL"]." 405 Method Not Allowed", true, 405);
          echo bbyPrintError('HTTP 405 Method Not Allowed');
          exit();
      }
}
}

// Get SVG code for icon
function bbyGetIconSvg($iconSet, $iconName){
      global $BBY_CONFIGS;
      header("Content-type: application/json");
      header("Pragma: no-cache");
      header("Expires: 0");
      $uploadDir = wp_upload_dir();
      $doc = new DomDocument;

      libxml_use_internal_errors(true);
      $doc->loadHTMLFile($uploadDir['basedir'].$BBY_CONFIGS['internal']['icons'][$iconSet]);
      libxml_use_internal_errors(false);

      if (strpos(strtolower($iconSet), 'fontawesome') === 0){
          $svgIcon = $doc->saveHTML($doc->getElementById($iconName));
          if (strpos($svgIcon, $iconName) !== false){
            $svgReady = str_replace('<symbol', '<svg', $svgIcon);
            $svgReady = str_replace('</symbol', '</svg', $svgReady);
            // $svgReady = str_replace('"', '\"', $svgReady);
            $response = array (
              'message' => $svgReady
            );
            echo bbyPrintSuccess($response);
            exit();
          } else {
            header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
            echo bbyPrintError('HTTP 404 Icons Not found');
            exit();
          }
      } else if (strpos(strtolower($iconSet), 'google') === 0){
          $svgIcon = $doc->saveHTML($doc->getElementById($iconName));
          if (strpos($svgIcon, $iconName) !== false){
            $svgReady = $doc->saveHTML($doc->getElementById($iconName)->childNodes->item(0));
            // $svgReady = str_replace('"', '\"', $svgReady);
            $response = array (
              'message' => $svgReady
            );
            echo bbyPrintSuccess($response);
            exit();
          } else {
            header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
            echo bbyPrintError('HTTP 404 Icons Not found');
            exit();
          }
      }
}

// Internal functions
// Force update JSON data
function bbyUpdateJson(string $spaceType, bool $force = false){
  global $BBY_CONFIGS;
  include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/jsonParser.php';
  if (!get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType) || $force){
      $jsonRaw=$BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/app/dist/public/db'.$spaceType.'.json';
      $json=bbyParseJSONfiletoArray($jsonRaw);
      update_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType,$json);
      $response = array (
        'message' => 'Database updated successfully'
      );
      echo bbyPrintSuccess($response);
      exit();
} else {
      header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
      echo bbyPrintError('Database already exist. Please use force.');
      exit();
}
}

// Save Google Fonts locally
function bbySaveFonts(bool $force = false){
  global $BBY_CONFIGS;
  $fontStore = 'bby_admin_fonts'.$BBY_CONFIGS['optionStore'];
 if (!get_option($fontStore) || $force){
    $url = $BBY_CONFIGS['internal']['fonts']['googleFontURL'];
    $handle = curl_init();
    curl_setopt_array($handle, array(
      CURLOPT_URL            => $url,
      CURLOPT_RETURNTRANSFER => true
  )
);
    $output = curl_exec($handle);
    curl_close($handle);
    if (bbyIsJson($output)){
      update_option($fontStore, json_decode($output, true));
      $response = array (
        'message' => 'Fonts loaded'
      );
      echo bbyPrintSuccess($response);
      exit();
    } else {
      header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
      echo bbyPrintError('Received wrong fonts definitions');
      exit();
    }
  } else {
    header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
    echo bbyPrintError('Fonts already loaded. Please use force.');
    exit();
  }
}

// Save Google Fonts locally
function bbySaveIcons(bool $force = false){
  global $BBY_CONFIGS;
  include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/smartCopy.php';
  include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/jsonParser.php';
  $iconStore = 'bby_admin_icons'.$BBY_CONFIGS['optionStore'];
 if (!get_option($iconStore) || $force){
    $path = $BBY_CONFIGS['internal']['workingDir'].$BBY_CONFIGS['internal']['icons']['iconsPath'];
    $json=bbyParseJSONfiletoArray($path);
      update_option($iconStore, $json);
      $uploadDir = wp_upload_dir();
      if (!file_exists($uploadDir['basedir'].'/builderboy')) {
        mkdir($uploadDir['basedir'].'/builderboy/icons', 0777, true);
      }
      if (smartCopy($BBY_CONFIGS['internal']['workingDir'].$BBY_CONFIGS['internal']['icons']['iconsSetsDir'], $uploadDir['basedir'].'/builderboy/icons')){
        $response = array (
          'message' => 'Icons loaded'
        );
        echo bbyPrintSuccess($response);
      }
      exit();
  } else {
    header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
    echo bbyPrintError('Icons already loaded. Please use force.');
    exit();
  }
}

// Save Admin Panel Icons locally
function bbySavePanelAssets(bool $force = false){
  global $BBY_CONFIGS;
  include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/smartCopy.php';
    $uploadDir = wp_upload_dir();
    if (!file_exists($uploadDir['basedir'].'/builderboy/assets') || $force) {
        $path = $BBY_CONFIGS['internal']['workingDir'].$BBY_CONFIGS['internal']['assets']['panelAssetsPath'];
        if (!file_exists($uploadDir['basedir'].'/builderboy')) {
            mkdir($uploadDir['basedir'].'/builderboy', 0777, true);
        }
        if (smartCopy($BBY_CONFIGS['internal']['workingDir'].$BBY_CONFIGS['internal']['assets']['panelAssetsPath'], $uploadDir['basedir'].'/builderboy/assets')) {
          $response = array (
            'message' => 'Panel assets loaded'
          );
          echo bbyPrintSuccess($response);
        }
        exit();
    } else {
        header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
        echo bbyPrintError('Panel assets already loaded. Please use force.');
        exit();
    }
}

function bbyClearAdminDatabase(string $spaceType, bool $force = false){
  global $BBY_CONFIGS;
  delete_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType);
  $response = array (
    'message' => 'Database cleared.'
  );
  echo bbyPrintSuccess($response);
  exit();
}


// Main function
function bbyRetrieveRequestType(){
  global $BBY_CONFIGS;
  parse_str($_SERVER['QUERY_STRING'], $parsedRequest);
  if (isset($parsedRequest['page']) && $parsedRequest['page'] == $BBY_CONFIGS['adminInfo']['mainPage']) {
    if (isset($parsedRequest['action'])){
      if (isset($parsedRequest['platform']) && strtolower($parsedRequest['platform']) == 'mobile'){
        $platform = '_' . $parsedRequest['platform'];
      } else {
        $platform = '';
      }
      switch($parsedRequest['action']){
        // core actions
        case 'getJSONvalues':
          bbyGetJson($platform);
          break;
        case 'postJSONvalues':
          bbyPostJson($platform);
          break;
        case 'getFonts':
          bbyGetFonts();
          break;
        case 'getIcons':
          bbyGetIcons();
          break;
        case 'uploadGeneratedLogo':
          bbyUploadGeneratedLogo();
          break;
        case 'getIconSVG':
        if (isset($parsedRequest['iconSet']) && isset($parsedRequest['iconName'])){
          bbyGetIconSvg($parsedRequest['iconSet'], $parsedRequest['iconName']);
        }
          break;
        // end core actions
        // helper actions
        case 'internalJSONupdate':
          if (isset($parsedRequest['force']) && strtolower($parsedRequest['force']) == 'true'){
            $forceUpdate = true;
          } else {
            $forceUpdate = false;
          }
          bbyUpdateJson($platform, $forceUpdate);
          break;
        case 'internalSaveGoogleFonts':
          if (isset($parsedRequest['force']) && strtolower($parsedRequest['force']) == 'true'){
            $forceUpdate = true;
          } else {
            $forceUpdate = false;
          }
            bbySaveFonts($forceUpdate);
          break;
        case 'internalSaveIcons':
          if (isset($parsedRequest['force']) && strtolower($parsedRequest['force']) == 'true'){
            $forceUpdate = true;
          } else {
            $forceUpdate = false;
          }
            bbySaveIcons($forceUpdate);
          break;
          case 'internalSavePanelAssets':
          if (isset($parsedRequest['force']) && strtolower($parsedRequest['force']) == 'true') {
              $forceUpdate = true;
          } else {
              $forceUpdate = false;
          }
            bbySavePanelAssets($forceUpdate);
          break;
          case 'internalClearAdminDatabase':
          if (isset($parsedRequest['force']) && strtolower($parsedRequest['force']) == 'true') {
              $forceUpdate = true;
          } else {
              $forceUpdate = false;
          }
            bbyClearAdminDatabase($platform, $forceUpdate);
          break;
        // end helper actions
      }
    }
  }

}

// Helper functions
function bbyIsJson($string) {
 json_decode($string);
 return (json_last_error() == JSON_ERROR_NONE);
}

function bbyUpdateSettings($receivedData, $storedData, string $spaceType){
  global $BBY_CONFIGS;
  $verifyStructure=bbyVerifySentDataStructure($receivedData, $storedData);
  if (is_bool($verifyStructure) && $verifyStructure == TRUE){
    update_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType,$receivedData);
    return true;
  } else {
    if (!empty($verifyStructure['new'])){
      // print_r(json_encode($verifyStructure['new']));
    }
    if ($verifyStructure['removed']) {
      // print_r(json_encode($verifyStructure['removed']));
    }
    return false;
   }
}

function bbyVerifySentDataStructure($receivedData, $storedData){
  global $BBY_CONFIGS;
  include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/TreeWalker.php';

  $treewalker = new TreeWalker(array(
    "debug"=>false,
    "returntype"=>"array")
  );

  $compare=$treewalker->getdiff($receivedData, $storedData, false);

  if (!empty($compare['new']) || !empty($compare['removed'])){
    return $compare;
  }
  else {
    return true;
  }
}
///// End helper functions
