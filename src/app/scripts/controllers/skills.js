'use strict';
angular.module('kamaydApp')
  .controller('SkillsCtrl', function ($scope, data, $stateParams) {
     $scope.categories = data.getCategories();
     $scope.selectedSkill = data.findSkill($stateParams.selected) || $scope.categories[0].skills[0];
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
