'use strict';

/**
 * @ngdoc function
 * @name kamaydApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kamaydApp
 */
angular.module('kamaydApp')
  .controller('MainCtrl', function ($scope) {
    $scope.skills = [
      'HTML5',
      'AngularJS',
      'Karma'
    ];
  });
