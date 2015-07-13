'use strict';
angular.module('kamaydApp')
  .controller('RecomendationsCtrl', function ($scope, data) {
     $scope.recomendations = data.getRecomendations();
  });
