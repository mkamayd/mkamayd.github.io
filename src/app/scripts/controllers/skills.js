'use strict';
angular.module('kamaydApp')
  .controller('SkillsCtrl', function ($scope, data) {
     $scope.categories = data.getCategories();
     $scope.selectedSkill = $scope.categories[0].skills[0];

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
     $scope.skillFilter = function(value){
         if($scope.filter.onlyWeapons)
         {
             return value.weapon;
         }
         return true;
     };
  });
