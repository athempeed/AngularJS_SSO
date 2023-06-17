'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('MainCtrl',['$rootScope', '$scope', '$location',  function ($rootScope, $scope, $location) {
    console.log('user profile',$rootScope.userInfo.profile);
    $scope.info ={
      name:$rootScope.userInfo.profile.name
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
