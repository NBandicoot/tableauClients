'use strict';

describe('Controller: AjouterclientCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var AjouterclientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AjouterclientCtrl = $controller('AjouterclientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AjouterclientCtrl.awesomeThings.length).toBe(3);
  });
});
