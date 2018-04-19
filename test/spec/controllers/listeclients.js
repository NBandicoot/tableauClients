'use strict';

describe('Controller: ListeclientsCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var ListeclientsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListeclientsCtrl = $controller('ListeclientsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListeclientsCtrl.awesomeThings.length).toBe(3);
  });
});
