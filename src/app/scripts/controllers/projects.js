'use strict';
angular.module('kamaydApp')
  .controller('ProjectsCtrl', function ($scope, data, $stateParams) {
     $scope.projects = data.getProjects();
     $scope.selectedProject = data.findProject($stateParams.selected) || $scope.projects[0];

     $scope.selectProject = function(project){
         if($scope.selectedProject === project){
             $scope.selectedProject = null;
         }
         else {$scope.selectedProject = project;
         }
     };
  });
