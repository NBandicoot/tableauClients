'use strict';

/**
 * @ngdoc overview
 * @name tableauClientsApp
 * @description
 * # tableauClientsApp
 *
 * Main module of the application.
 */
angular
  .module('tableauClientsApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ajouterPresta', {
        templateUrl: 'views/ajouterpresta.html',
        controller: 'AjouterPrestaCtrl',
        controllerAs: 'ajouterPresta'
      })
      .when('/modifierPresta', {
        templateUrl: 'views/modifierpresta.html',
        controller: 'ModifierPrestaCtrl',
        controllerAs: 'modifierPresta'
      })
      .when('/supprimerPresta', {
        templateUrl: 'views/supprimerpresta.html',
        controller: 'supprimerPrestaCtrl',
        controllerAs: 'SupprimerPresta'
      })
      .when('/tableauPrestations', {
        templateUrl: 'views/tableauprestations.html',
        controller: 'TableauPrestationsCtrl',
        controllerAs: 'tableauPrestations'
      })
      .when('/infoClient', {
        templateUrl: 'views/infoclient.html',
        controller: 'InfoclientCtrl',
        controllerAs: 'infoClient'
      })
      .when('/listeClients', {
        templateUrl: 'views/listeclients.html',
        controller: 'ListeclientsCtrl',
        controllerAs: 'listeClients'
      })
      .when('/ajouterClient', {
        templateUrl: 'views/ajouterclient.html',
        controller: 'AjouterclientCtrl',
        controllerAs: 'ajouterClient'
      })
      .when('/modifierClient', {
        templateUrl: 'views/modifierclient.html',
        controller: 'ModifierclientCtrl',
        controllerAs: 'modifierClient'
      })
      .otherwise({
        redirectTo: '/tableauPrestations'
      });
  });
