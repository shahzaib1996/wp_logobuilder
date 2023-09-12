<?php

if (!defined('WPINC')){
  header('Location: /');
  exit();
}

// BuilderBoy pages definitions
require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/modifiers.php');

add_filter('wp_handle_upload_prefilter', 'bbyCreateUploadDirFilter');
add_filter('wp_handle_upload', 'bbyDestroyUploadDirFilter');

function bbyAddAdminPage(){
  global $BBY_CONFIGS;
  add_menu_page('Logo BuilderBoy Plugin',
                'Logo BuilderBoy',
                'manage_options',
                $BBY_CONFIGS['adminInfo']['mainPage'],
                function(){
                  // render Main admin page
                  global $BBY_CONFIGS;
                  require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/templates/index.php');
                },
                'data:image/svg+xml;base64,' . base64_encode('<svg width="20" height="20" viewBox="0 0 1792 1792" version="1.1" id="svg107" xmlns="http://www.w3.org/2000/svg"><g id="g118" transform="matrix(21.783755,0,0,21.783755,-193.18775,-193.18776)"><path d="m 73.259333,26.740166 c 2.569,-2.568999 2.569,-6.734999 0,-9.303999 l -4.651666,-4.652 -18.608,18.607666 9.304,9.304001 z" fill="black" id="path16" /><path d="m 31.392,12.784167 -4.652,4.651999 c -2.569,2.569 -2.569,6.735 0,9.304 l 13.956,13.956 9.304,-9.304 z" fill="black" id="path18"/><path d="m 59.303667,40.695834 -9.304,9.304 9.304,9.304 -9.304,9.303666 -9.304,-9.304 9.304,-9.304 -9.303667,-9.303666 -13.956,13.956 c -2.569,2.569 -2.569,6.735 0,9.304 l 4.652,4.651999 9.304,9.304 9.304,9.304001 9.304,-9.304001 9.304,-9.304 4.652,-4.651999 c 2.569,-2.569 2.569,-6.735 0,-9.304 z" fill="black" id="path20"/></g></svg>'),
                110);
  add_submenu_page($BBY_CONFIGS['adminInfo']['mainPage'],
                  'Logo BuilderBoy Plugin',
                  'Create logo',
                  'manage_options',
                  $BBY_CONFIGS['adminInfo']['mainPage'],
                  function(){
                    // render Main admin page
                    global $BBY_CONFIGS;
                    require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/templates/index.php');
                  });

  $jsonArray = get_option('bby_admin'.$BBY_CONFIGS['optionStore']);
  if ($jsonArray){
    $license = $jsonArray['adminSettings']['selected_value']['license'];
    if ($license != ''){
      add_submenu_page($BBY_CONFIGS['adminInfo']['mainPage'],
                      'Logo BuilderBoy Plugin Advanced Settings',
                      'Advanced Settings',
                      'manage_options',
                      $BBY_CONFIGS['adminInfo']['advancedSettingsPage'],
                      function(){
                        // render advanced settings page
                        global $BBY_CONFIGS;
                        require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/templates/admin_advanced_settings.php');
                      });
    }
  }
}

add_action('admin_menu', 'bbyAddAdminPage');

// Main Frame -------------------------
// global $BBY_CONFIGS;

if (isset($_SERVER[$BBY_CONFIGS['accessHeader']['name']]) && strcmp($_SERVER[$BBY_CONFIGS['accessHeader']['name']], $BBY_CONFIGS['accessHeader']['value']) == 0) {
      require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/rest.php');
      add_action('admin_init', 'bbyRetrieveRequestType', 1, 1);
    } else {
      // require_once($BBY_CONFIGS['internal']['workingDir'] . '/inc/admin/src/modifiers.php');
      // add_action('admin_menu','bbyHideWpUpdateNag');
}
// ------------------------------------
?>
