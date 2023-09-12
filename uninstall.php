<?php
// if uninstall.php is not called by WordPress, die
if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}

if (substr(plugin_dir_path(__FILE__), -1) == '/'){
  $bbyWorkingDirectory = substr(plugin_dir_path(__FILE__), 0, -1);
} else {
  $bbyWorkingDirectory = plugin_dir_path(__FILE__);
}
$BBY_CONFIGS = require_once $bbyWorkingDirectory .'/inc/admin/config/config.php';

$bbyInstallationDir = ABSPATH;
$bbyDirectoriesToRemove = array (
  "/wp-content/uploads/builderboy/assets",
  "/wp-content/uploads/builderboy/icons"
);
$bbyStoresToRemove = array (
  "",
  "_fonts",
  "_icons"
);

foreach ($bbyStoresToRemove as $value){
  delete_option('bby_admin'.$value.$BBY_CONFIGS['optionStore']);
}

foreach ($bbyDirectoriesToRemove as $directory){
  bbyRemoveFiles($bbyInstallationDir.$directory);
}

function bbyRemoveFiles($target) {
    if(is_dir($target)){
        $files = glob( $target . '*', GLOB_MARK );
        foreach( $files as $file ){
            bbyRemoveFiles( $file );
        }
        rmdir( $target );
    } elseif(is_file($target)) {
        unlink( $target );
    }
}

?>
