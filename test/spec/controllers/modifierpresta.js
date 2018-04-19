'use strict';

describe('Controller: ModifierprestaCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var ModifierprestaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModifierprestaCtrl = $controller('ModifierprestaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModifierprestaCtrl.awesomeThings.length).toBe(3);
  });
});
