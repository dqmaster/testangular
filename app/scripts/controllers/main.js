'use strict';

/**
 * @ngdoc function
 * @name testangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testangularApp
 */
angular.module('testangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
	  'SitePoint'
    ];
  });
