'use strict';
angular.module('kamaydApp')
  .controller('SkillsCtrl', function ($scope, data, $stateParams) {

     $scope.categories = data.getCategories();
     $scope.skills = data.getSkills();
     $scope.selected = {skill : data.findSkill($stateParams.selected) || $scope.categories[0].skills[0]};
     $scope.filter = {
         onlyWeapons : $scope.selected.skill.weapon
     };
     $scope.selectSkill = function(skill){
         if($scope.selected.skill === skill){
             $scope.selected.skill = null;
         }
         else {
             $scope.selected.skill = skill;
         }
     };
     $scope.skillFilter = function(value){
         if($scope.filter.onlyWeapons)
         {
             return value.weapon;
         }
         return true;
     };
     $scope.$watch('filter.onlyWeapons', function(value){
         if(value && $scope.selected.skill && !$scope.selected.skill.weapon){
             $scope.selected.skill = null;
         }
     });
  });
