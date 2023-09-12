<?php

if (!defined('WPINC')){
  header('Location: /');
  exit();
}

remove_all_actions( 'user_admin_notices' );
remove_all_actions( 'admin_notices' );
// if (isset($params['page']) && $params['page'] == $BBY_CONFIGS['adminInfo']['mainPage'])
parse_str($_SERVER['QUERY_STRING'], $parsedRequest);
if (is_admin()){

  if (isset($parsedRequest['page']) && ($parsedRequest['page'] == $BBY_CONFIGS['adminInfo']['mainPage'] || $parsedRequest['page'] == $BBY_CONFIGS['adminInfo']['advancedSettingsPage'])){
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_HOST']);
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: *");
  }
  require_once $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/admin_includes.php';

} else {
// NON-ADMIN INCLUDES
}

?>
