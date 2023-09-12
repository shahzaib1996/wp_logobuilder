<?php
function bbyActivatePluginLogoBuilder() {
    if (function_exists('is_multisite') && is_multisite()) {
        // If it's a Multisite environment
        // Iterate through all sites in the network and activate the plugin on each site
        $sites = get_sites();
        foreach ($sites as $site) {
            switch_to_blog($site->blog_id);
            bbyActivateSingleSite();
            restore_current_blog();
        }
    } else {
        // Regular single-site activation
        bbyActivateSingleSite();
    }
}

function bbyActivateSingleSite() {
    global $bbyWorkingDirectory;
    global $BBY_CONFIGS;

    // Activate your plugin's assets and settings here
    bbyLoadPluginAssets();
    bbyLoadPluginJsonDb('');
}

function bbyLoadPluginAssets() {
    global $BBY_CONFIGS;
    include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/smartCopy.php';
    $uploadDir = wp_upload_dir();
    if (!file_exists($uploadDir['basedir'].'/builderboy')) {
        mkdir($uploadDir['basedir'].'/builderboy', 0777, true);
    }
    if (!smartCopy($BBY_CONFIGS['internal']['workingDir'].$BBY_CONFIGS['internal']['assets']['panelAssetsPath'], $uploadDir['basedir'].'/builderboy/assets')) {
        echo "Fatal ERROR: Couldn't copy assets.";
        exit();
    }
}

function bbyLoadPluginJsonDb($spaceType) {
    global $BBY_CONFIGS;
    include $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/ext/jsonParser.php';
    if (!get_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType)){
        $jsonRaw = $BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/app/dist/public/db'.$spaceType.'.json';
        $json = bbyParseJSONfiletoArray($jsonRaw);
        if (!update_option('bby_admin'.$BBY_CONFIGS['optionStore'].$spaceType, $json)){
            echo ("Fatal ERROR: Couldn't save JSON database");
            exit();
        }
    }
}

?>