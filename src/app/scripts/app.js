'use strict';
angular
  .module('kamaydApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.select',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: 'views/main.html'

            })
            .state('skills', {
                url: '/skills',
                params: {
                    selected: { value: 'Angular JS' }
                },
                controller: 'SkillsCtrl',
                templateUrl: 'views/skills.html'
            })
            .state('experience', {
                url: '/experience',
                params: {
                    selected: { value: 'Pooler App' }
                },
                controller: 'ExperienceCtrl',
                templateUrl: 'views/experience.html'
            })
            .state('recomendations', {
                url: '/recomendations',
                controller: 'RecomendationsCtrl',
                templateUrl: 'views/recomendations.html'

            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
