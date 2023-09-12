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


return array(
    'internal' => array(
      'fonts' => array(
        'fontsJSONpath' => '/inc/admin/data/fonts.json',
        'googleFontURL' => 'https://webfonts.googleapis.com/v1/webfonts?sort=POPULARITY&key=AIzaSyDFWik5cZ5EmsIhmT8DxTmB9BQl5JEljpo'
      ),
      'icons' => array(
        'iconsPath' => '/inc/admin/data/iconSet.json',
        'iconsSetsDir' => '/inc/admin/data/icons',
        'fontawesome-brands' => '/builderboy/icons/FontAwesome/brands/fontawesome-brands.svg',
        'fontawesome-solid' => '/builderboy/icons/FontAwesome/solid/fontawesome-solid.svg',
        'fontawesome-regular' => '/builderboy/icons/FontAwesome/regular/fontawesome-regular.svg',
        'google-material' => '/builderboy/icons/MaterialIcons/material/google-material.svg'
      ),
      'assets' => array(
        'panelAssetsPath' => '/inc/admin/app/dist/public/assets',
      ),
      'uploadsPath' => '/wp-content/uploads/builderboy',
      'workingDir' => $bbyWorkingDirectory
    ),
    'accessHeader' => array(
        'name'=>'HTTP_X_BUILDERBOY',
        'value'=>'QnVpbGRlckJveQ=='
    ),
    'optionStore' => '_logo_builder',
    'adminInfo' => array(
      'mainPage' => 'bby_admin_logo_builder_main_page',
      'advancedSettingsPage' => 'bby_admin_logo_builder_advanced_settings'
    ),
    'appInfo' => array(
      'appName' => 'BuilderBoy',
      'appVersion' => '1.0.0',
      'appWebVersion' => '1.0.0'
    )
);

?>
