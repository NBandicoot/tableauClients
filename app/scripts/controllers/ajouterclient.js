'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:AjouterclientCtrl
 * @description
 * # AjouterclientCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('AjouterclientCtrl', ['$scope', function($scope) {
    $scope.btnadd = function() {
      if (!$scope.name) {
        window.alert('Entrer le nom du client');
      } else if (!$scope.deliveryAddress) {
        window.alert('Entrer l\'adresse de livraison');
      } else if (!$scope.billingAddress) {
        window.alert('Entrer l\'adresse de facturation');
      } else if (!$scope.phone) {
        window.alert('Entrer le numéro de téléphone');
      } else if (!$scope.email) {
        window.alert('Entrer l\'email');
      } else {
        $scope.client.push({
          'id': $scope.id,
          'name': $scope.name,
          'deliveryAddress': $scope.deliveryAddress,
          'billingAddress': $scope.billingAddress,
          'phone': $scope.phone,
          'email': $scope.email
        });
        $scope.id = '';
        $scope.name = '';
        $scope.deliveryAddress = '';
        $scope.billingAddress = '';
        $scope.phone = '';
        $scope.email = '';
      }
    };
  }]);
