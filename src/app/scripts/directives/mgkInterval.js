'use strict';

/**
 * @ngdoc directive
 * @name kamaydApp.directive:mgkInterval
 * @description
 * # mgkInterval
 */
angular.module('kamaydApp')
  .directive('mgkInterval', function ($interval) {
    return {
      scope:{
          startDate:'=',
          endDate:'=?'
      },
      template: '<div>' +
                    '<small ng-show="showDates">' +
                        '{{startDate.format("MMMM  YYYY")}} - {{endDate.format("MMMM  YYYY")}}' +
                    '</small>'+
                    '<em ng-hide="showDates">' +
                        '{{interval}}' +
                    '</em>' +
                '</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          var timeoutId;
          if(angular.isUndefined(scope.endDate))
          {
              scope.endDate = moment();
          }
          scope.showDates = true;
          scope.interval = moment.duration(scope.endDate - scope.startDate).humanize();

          timeoutId = $interval(function() {
                  scope.showDates = !scope.showDates;
          }, 5000);
          element.on('$destroy', function() {
              $interval.cancel(timeoutId);
          });
      }
    };
  });
