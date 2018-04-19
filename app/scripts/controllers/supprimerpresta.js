'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:SupprimerprestaCtrl
 * @description
 * # SupprimerprestaCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('SupprimerprestaCtrl', ['$scope', function($scope) {
    $scope.del = function (id) {
                $scope.presta.splice(id, 1);
           };
  }]);
