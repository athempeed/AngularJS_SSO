'use strict';

/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *
 * Main module of the application.
 */
angular
  .module('sampleApp', [
    'ngRoute',
    'AdalAngular'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider,adalAuthenticationServiceProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    adalAuthenticationServiceProvider.init(
      {
        tenant: "",
        clientId: "",
        redirectUri: "http://localhost:9000/"
      },
      $httpProvider
    );

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        requireADLogin: true,
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        requireADLogin: true,
      }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        requireADLogin: true,
      })
      .otherwise({
        redirectTo: '/'
      });

  });
