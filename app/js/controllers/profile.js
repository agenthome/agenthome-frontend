'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ProfileController($scope, $auth, ExampleService) {
  var vm = this;
  $scope.getProfile = function() {
    console.log(ExampleService);
    ExampleService.get()
      .success(function(data) {
        vm.user = data;
        console.log(data);
      });
  };
}

controllersModule.controller('ProfileController', ProfileController);
