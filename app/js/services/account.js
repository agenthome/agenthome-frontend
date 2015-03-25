'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function AccountService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('https://www.googleapis.com/userinfo/v2/me').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('AccountService', AccountService);
