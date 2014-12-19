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
                controller: 'SkillsCtrl',
                templateUrl: 'views/skills.html'
            })
            .state('projects', {
                url: '/projects',
                controller: 'ProjectsCtrl',
                templateUrl: 'views/projects.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
