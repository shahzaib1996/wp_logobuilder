<?php
/*
Plugin Name: DWL Logo Builder
Plugin URI: https://digiware-labs.com
Author: DWL Team
Author URI: https://digiware-labs.com
Description: A new approach for making astonishing website logos.
Version: 1.0.0
License: MIT License
Requires PHP: 5.6.40
Requires at least: 4.7
License URI: https://digiware-labs.com
Tags: theme, wordpress, clean, test, minimal, custom admin options, logo, create, logomaker
*/
if (!defined('WPINC')){
  header('Location: /');
  exit();
}


global $bbyWorkingDirectory;
global $BBY_CONFIGS;

if (substr(plugin_dir_path(__FILE__), -1) == '/'){
  $bbyWorkingDirectory = substr(plugin_dir_path(__FILE__), 0, -1);
} else {
  $bbyWorkingDirectory = plugin_dir_path(__FILE__);
}
$BBY_CONFIGS = require_once $bbyWorkingDirectory .'/inc/admin/config/config.php';
require_once $bbyWorkingDirectory . '/functions.php';

// HOOKS AND FILTERS
add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'bbyLinkOnPluginPage' );
register_activation_hook( __FILE__, 'bbyActivatePluginLogoBuilder' );


?>
