'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LogoutController($auth) {

  if(!$auth.isAuthenticated()) {
    return;
  }
  $auth.logout()
    .then(function() {

    });

}

controllersModule.controller('LogoutController', LogoutController);
