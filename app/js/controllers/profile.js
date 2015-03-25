'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ProfileController($scope, $auth, AccountService) {
  var vm = this;
  vm.title = 'Profile';
  AccountService.get()
    .then(function(data) {
      vm.id = data.id;
      vm.gender = data.gender;
      vm.name = data.name;
      vm.picture = data.picture;
      vm.link = data.link;
      console.warn('Success with call to API. Response: %O', data); 
    })
    .catch(function(data) {
      if(data.error.code === 401) {
        
      } else {
        console.warn('Problem with call to API.'); 
        console.table(data.error.errors); 
      }
    });
}

controllersModule.controller('ProfileController', ProfileController);
