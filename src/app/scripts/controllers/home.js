'use strict';
angular.module('kamaydApp')
  .controller('HomeCtrl', function ($scope, data, $state) {
     $scope.skills = data.getSkills();
     $scope.companies = data.getCompanies();
     $scope.categories = data.getCategories();
     $scope.uni = data.getEducation();
     $scope.courses = data.getCourses();
     $scope.selected = {skill: null, position:null};
     $scope.navigateToSkill = function(skill){
         $state.go('skills', {selected: skill.name});
     };
     $scope.navigateToPosition = function(company){
      console.log()
      $state.go('experience', {selected: company.projects[0].name});
  };
  });
