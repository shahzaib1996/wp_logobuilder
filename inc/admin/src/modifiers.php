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


// Change media upload path
function bbyCreateUploadDirFilter($file){
  global $BBY_CONFIGS;
    $refererUrl = parse_url(wp_get_referer());
    if (isset($refererUrl['query'])){
        parse_str($refererUrl['query'], $params);
        if (isset($params['page']) && $params['page'] == $BBY_CONFIGS['adminInfo']['mainPage']){
    	      add_filter('upload_dir', 'bbyChangeUploadDir');
    }
  }
	return $file;
}

function bbyDestroyUploadDirFilter($fileinfo){
    remove_filter('upload_dir', 'bbyChangeUploadDir');
    return $fileinfo;
}

function bbyChangeUploadDir($upload) {
  $installationDir = ABSPATH;
  $siteUrl = get_site_url();

  $upload['basedir'] = $installationDir . "wp-content/uploads";
  $upload['subdir'] = "/builderboy";
  $upload['path'] = $upload['basedir'] . $upload['subdir'];
  $upload['baseurl'] = $siteUrl . "/wp-content/uploads";
  $upload['url'] = $upload['baseurl'] . $upload['subdir'];

 return $upload;
}

// hide core updates notification in the dashboard
function bbyHideWpUpdateNag() {
  global $BBY_CONFIGS;
  parse_str($_SERVER['QUERY_STRING'], $parsedRequest);
  if (isset($parsedRequest['page']) && $parsedRequest['page'] == $BBY_CONFIGS['adminInfo']['mainPage']) {
    remove_action( 'admin_notices', 'update_nag', 3 ); // update notice at the top of the screen
    remove_filter( 'update_footer', 'core_update_footer' ); //update notice in the footer
    add_filter( 'admin_footer_text', '__return_empty_string', 11 );
    add_filter( 'update_footer',     '__return_empty_string', 11 );
  }
}
add_action('admin_menu','bbyHideWpUpdateNag');

function bbyRemoveTgmpaMessage() {
  global $BBY_CONFIGS;
  parse_str($_SERVER['QUERY_STRING'], $parsedRequest);
  if (isset($parsedRequest['page']) && ($parsedRequest['page'] == $BBY_CONFIGS['adminInfo']['mainPage'] || $parsedRequest['page'] == $BBY_CONFIGS['adminInfo']['advancedSettingsPage'])) {
	   echo "<style>#setting-error-tgmpa{ display: none; } .notice { display: none;}</style>";
   }
}
add_action('admin_head', 'bbyRemoveTgmpaMessage');

 ?>
