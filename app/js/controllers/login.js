'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LoginController($scope, $auth) {

  var vm = this;

  vm.title = 'Sign In';

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        console.log('yay');
      })
      .catch(function(response) {
        console.log(response);
      });
  };

}

controllersModule.controller('LoginController', LoginController);
