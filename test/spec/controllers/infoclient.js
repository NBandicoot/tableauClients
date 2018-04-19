'use strict';

describe('Controller: InfoclientCtrl', function () {

  // load the controller's module
  beforeEach(module('tableauClientsApp'));

  var InfoclientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoclientCtrl = $controller('InfoclientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfoclientCtrl.awesomeThings.length).toBe(3);
  });
});
