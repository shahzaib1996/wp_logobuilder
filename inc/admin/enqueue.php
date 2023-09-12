<?php
/*
Plugin Name: DWL Logo Builder
Plugin URI: https://digiware-labs.com
Author: DWL Team
Author URI: https://digiware-labs.com
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

function bbyLoadAdminScripts( $hook ){
  global $BBY_CONFIGS;
  $currentUri = plugin_dir_url(__FILE__);

  if (( strcmp('toplevel_page_'.$BBY_CONFIGS['adminInfo']['mainPage'],$hook) !== 0 ) && (strcmp('builderboy_page_'.$BBY_CONFIGS['adminInfo']['advancedSettingsPage'],$hook) !== 0)){
    return;
  }

  wp_register_style('bby_vue', $currentUri . 'app/dist/css/app.61c6ce2a.css', array(), '1.0.0', 'all');
  wp_enqueue_style('bby_vue' );

  wp_register_style('bby_vue1', $currentUri . 'app/dist/css/chunk-vendors.84f8a3a0.css', array(), '1.0.0', 'all');
  wp_enqueue_style('bby_vue1' );

  wp_enqueue_media();


}

add_action( 'admin_enqueue_scripts', 'bbyLoadAdminScripts' );
