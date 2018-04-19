'use strict';

describe('Controller: ModifierclientCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var ModifierclientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModifierclientCtrl = $controller('ModifierclientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModifierclientCtrl.awesomeThings.length).toBe(3);
  });
});
