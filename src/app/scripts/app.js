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
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
            }).state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            });
        $urlRouterProvider.otherwise('/');
    });
