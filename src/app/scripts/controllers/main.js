'use strict';
angular.module('kamaydApp')
  .controller('MainCtrl', function ($scope, data) {
     $scope.skills = data.getSkills();
     $scope.categories = data.getCategories();
     $scope.projects = data.getProjects();
     $scope.selectedSkill = $scope.skills[0];

     $scope.selectSkill = function(skill){
         if($scope.selectedSkill === skill){
             $scope.selectedSkill = null;
         }
         else {$scope.selectedSkill = skill;
         }
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
