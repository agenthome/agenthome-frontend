'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider, $authProvider) {

  var requireAuthentication = function($q, $location, $auth) {
    var deferred = $q.defer();

    if(!$auth.isAuthenticated()) {
      $location.path('/login');
    } else {
      deferred.resolve();
    }
    return deferred.promise;
  };

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeController as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Login', {
    url: '/login',
    controller: 'LoginController as login',
    templateUrl: 'login.html',
    title: 'Sign In'
  })
  .state('Logout', {
    url: '/logout',
    controller: 'LogoutController',
    template: null,
  })
  .state('Profile', {
    url: '/profile',
    templateUrl: 'profile.html',
    controller: 'ProfileController as profile',
    title: 'Profile',
    resolve: {
      authenticated: requireAuthentication
    }
  });

  $urlRouterProvider.otherwise('/');

  $authProvider.google({
    responseType: 'token',
    scope: [],
    clientId: '956000004577-0u17q327ohdch3nbbrdcm32cffeihjtn.apps.googleusercontent.com'
  });

}

module.exports = Routes;
