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


function bbyPrintError(string $message = "Unidentified Error"){
  $response =  array(
      'error' => true,
      'message' => $message
  );

  return stripslashes(json_encode($response, JSON_PRETTY_PRINT));
}

function bbyPrintSuccess(array $response){
  return json_encode($response, JSON_PRETTY_PRINT);
}

 ?>
