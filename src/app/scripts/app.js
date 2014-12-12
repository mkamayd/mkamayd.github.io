'use strict';

/**
 * @ngdoc overview
 * @name kamaydApp
 * @description
 * # kamaydApp
 *
 * Main module of the application.
 */
angular
  .module('kamaydApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
