<?php
if (!function_exists('bbyParseJSONfiletoArray')) {
  function bbyParseJSONfiletoArray($pathToJSON){
    if ( !$pathToJSON ){
      return false;
    }
    $json = file_get_contents($pathToJSON);
    $jsonDecoded = json_decode($json, true);
    if ($jsonDecoded === null) {
      header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
      echo bbyPrintError('Failed to process JSON file data');
      return false;
    } else {
      return $jsonDecoded;
    }
  }
}

if (!function_exists('bbyParseJSONtoArray')) {
  function bbyParseJSONtoArray($json){
    $jsonDecoded = json_decode($json, true);
    if ($jsonDecoded === null) {
      header($_SERVER["SERVER_PROTOCOL"]." 400 Bad request", true, 400);
      echo bbyPrintError('Failed to process JSON data');
      return false;
    } else {
      return $jsonDecoded;
    }
  }
}

 ?>
