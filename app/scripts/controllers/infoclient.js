'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:InfoclientCtrl
 * @description
 * # InfoclientCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('InfoclientCtrl', ['$scope', function($scope) {
    var key;
    $scope.edit = function(c, indx) {
      key = indx;
      $scope.id = c.id;
      $scope.name = c.name;
      $scope.deliveryAddress = c.deliveryAddress;
      $scope.billingAddress = c.billingAddress;
      $scope.phone = c.phone;
      $scope.email = c.email;
    };

  }]);
