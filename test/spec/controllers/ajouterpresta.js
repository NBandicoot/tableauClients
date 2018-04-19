'use strict';

describe('Controller: AjouterprestaCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var AjouterprestaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AjouterprestaCtrl = $controller('AjouterprestaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AjouterprestaCtrl.awesomeThings.length).toBe(3);
  });
});
