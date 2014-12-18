'use strict';
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
            templateUrl: 'views/main.html'
            })
            .state('skills', {
                url: '/skills',
                controller: 'MainCtrl',
                templateUrl: 'views/skills.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
