'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function NavigationController($scope, $auth) {
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
}

controllersModule.controller('NavigationController', NavigationController);
