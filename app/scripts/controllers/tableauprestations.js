'use strict';

/**
 * @ngdoc function
 * @name tableauClientsApp.controller:TableauPrestationsCtrl
 * @description
 * # TableauPrestationsCtrl
 * Controller of the tableauClientsApp
 */
angular.module('tableauClientsApp')
  .controller('TableauPrestationsCtrl', function tableauPrestationsCtrl() {
    this.data=[{id: '1', client: 'Game Cash', dateDebut: '21/03/2018', dateFin: '29/03/2018', nbJomos: '10', dateExpedition: '20/03/2018'},
  {id: '2', client: 'La Boucherie', dateDebut: '23/03/2018', dateFin: '29/03/2018', nbJomos: '15', dateExpedition: '22/03/2018'}];
});
