<?php


function bbyLinkOnPluginPage($links){
  global $BBY_CONFIGS;
  $jsonArray = get_option('bby_admin'.$BBY_CONFIGS['optionStore']);
  if ($jsonArray){
    $license = $jsonArray['adminSettings']['selected_value']['license'];
    if ($license == ''){
      $url = 'https://builderboy.co/rd/logobuilder/buyLicense';
      $_link = '<strong><a href="'.$url.'" target="_blank">' . __( 'Buy license', 'domain' ) . '</a></strong>';
      $links[] = $_link;
    }
  }
  return $links;
}

?>
