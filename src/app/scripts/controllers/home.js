'use strict';
angular.module('kamaydApp')
  .controller('HomeCtrl', function ($scope, data, $state) {
     $scope.companies = data.getCompanies();
     $scope.skills = data.getSkills();
     $scope.selected = {skill: null};
     $scope.navigate = function(skill){
         $state.go('skills', {selected: skill.name});
     };
  });
