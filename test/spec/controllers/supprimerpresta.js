'use strict';

describe('Controller: SupprimerprestaCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var SupprimerprestaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SupprimerprestaCtrl = $controller('SupprimerprestaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SupprimerprestaCtrl.awesomeThings.length).toBe(3);
  });
});
