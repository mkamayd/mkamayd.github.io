'use strict';
angular.module('kamaydApp')
  .controller('MainCtrl', function ($scope, data) {
     $scope.skills = data.getSkills();
     $scope.categories = data.getCategories();
     $scope.projects = data.getProjects();

     $scope.selectSkill = function(skill){
         $scope.selectedSkill = skill;
     };

     $scope.filter = {
         onlyWeapons : true
     };

     $scope.skillFilter = function(value, index){
         if($scope.filter.onlyWeapons)
         {
             return value.weapon;
         }
         return true;
     };
  });
