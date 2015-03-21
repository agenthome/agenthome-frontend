'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider, $authProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeController',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Login', {
    url: '/login',
    controller: 'LoginController',
    templateUrl: 'login.html',
    title: 'Login'
  })
  .state('Logout', {
    url: '/logout',
    controller: 'LogoutController',
    template: null,
  })
  .state('Profile', {
    url: '/profile',
    templateUrl: 'profile.html',
    controller: 'ProfileController',
    title: 'Profile',
    resolve: {
      authenticated: function($q, $location, $auth) {
        var deferred = $q.defer();

        if(!$auth.isAuthenticated()) {
          $location.path('/login');
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }
    }
  });

  $urlRouterProvider.otherwise('/');

  $authProvider.google({
    responseType: 'token',
    clientId: '956000004577-0u17q327ohdch3nbbrdcm32cffeihjtn.apps.googleusercontent.com'
  });

}

module.exports = Routes;
