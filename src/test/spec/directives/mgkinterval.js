'use strict';

describe('Directive: mgkInterval', function () {

  // load the directive's module
  beforeEach(module('kamaydApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mgk-interval></mgk-interval>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mgkInterval directive');
  }));
});
