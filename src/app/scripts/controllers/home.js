'use strict';
angular.module('kamaydApp')
  .controller('HomeCtrl', function ($scope, data, $state) {
     $scope.skills = data.getSkills();
     $scope.uni = data.getEducation();
     $scope.courses = data.getCourses();
     $scope.selected = {skill: null};
     $scope.navigate = function(skill){
         $state.go('skills', {selected: skill.name});
     };
  });
