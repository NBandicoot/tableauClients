'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:ModifierprestaCtrl
 * @description
 * # ModifierprestaCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('ModifierprestaCtrl', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }]);
