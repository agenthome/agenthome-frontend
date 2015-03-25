/*global angular */

'use strict';

describe('Unit: ProfileController', function() {

  var controller;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the controller
    angular.mock.inject(function($controller) {
      controller = $controller('ProfileController');
    });
  });

  it('should exist', function() {
    expect(controller).toBeDefined();
  });

  it('should have a number variable equal to 1234', function() {
    expect(controller.number).toEqual(1234);
  });

  it('should have a title variable equal to \'AngularJS, Gulp, and Browserify!\'', function() {
    expect(controller.title).toEqual('AngularJS, Gulp, and Browserify!');
  });

});
