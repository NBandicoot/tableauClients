'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:ModifierclientCtrl
 * @description
 * # ModifierclientCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('ModifierclientCtrl', ['$scope', function($scope) {
    var key;
    $scope.btnupd = function (id, name, deliveryAddress, billingAddress, phone, email) {
                $scope.client[key].id = id;
                $scope.client[key].name = name;
                $scope.client[key].deliveryAddress = deliveryAddress;
                $scope.client[key].billingAddress = billingAddress;
                $scope.client[key].phone= phone;
                $scope.client[key].email = email;
                $scope.id = '';
                $scope.name = '';
                $scope.deliveryAddress = '';
                $scope.billingAddress = '';
                $scope.phone = '';
                $scope.email = '';
            };
  }]);
