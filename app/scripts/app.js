'use strict';

angular.module('rapBattlesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'timer'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });