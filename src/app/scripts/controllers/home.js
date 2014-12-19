'use strict';
angular.module('kamaydApp')
  .controller('HomeCtrl', function ($scope, data) {
     $scope.companies = data.getCompanies();
     $scope.skills = data.getSkills();
  });
