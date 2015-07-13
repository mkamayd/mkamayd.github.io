'use strict';
angular.module('kamaydApp')
  .controller('ExperienceCtrl', function ($scope, data, $stateParams) {
     $scope.companies = data.getCompanies();
     $scope.selectedProject = data.findProject($stateParams.selected);

     $scope.selectProject = function(project){
         if($scope.selectedProject === project){
             $scope.selectedProject = null;
         }
         else {$scope.selectedProject = project;
         }
     };
  });
