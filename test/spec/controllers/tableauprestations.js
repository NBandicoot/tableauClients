'use strict';

describe('Controller: TableauprestationsCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var TableauprestationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TableauprestationsCtrl = $controller('TableauprestationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TableauprestationsCtrl.awesomeThings.length).toBe(3);
  });
});
