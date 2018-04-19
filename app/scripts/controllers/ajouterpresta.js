'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:AjouterPrestaCtrl
 * @description
 * # AjouterprestaCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('AjouterPrestaCtrl', ['$scope', function($scope) {
    $scope.btnadd = function() {
      if (!$scope.client) {
        window.alert('Entrer le nom du client');
      } else if (!$scope.startDate) {
        window.alert('Entrer la date de début de la prestation');
      } else if (!$scope.endDate) {
        window.alert('Entrer la date de fin de la prestation');
      } else if (!$scope.nbJomos) {
        window.alert('Entrer le nombre de Jomos nécessaires pour la prestation');
      } else if (!$scope.sendDate) {
        window.alert('Entrer la date d\'expédition des Jomos');
      } else {
        $scope.client.push({
          'id': $scope.id,
          'client': $scope.client,
          'startDate': $scope.startDate,
          'endDate': $scope.endDate,
          'nbJomos': $scope.nbJomos,
          'sendDate': $scope.sendDate
        });
        $scope.id = '';
        $scope.client = '';
        $scope.startDate = '';
        $scope.endDate = '';
        $scope.nbJomos = '';
        $scope.sendDate= '';
      }
    };
  }]);
