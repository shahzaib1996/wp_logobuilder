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


require $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/functions_admin_page.php';
require $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/enqueue.php';
require $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/activation.php';
require $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/plugin_list_page.php';



?>
