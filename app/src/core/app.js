/**
 * Created by kliu93 on 8/29/16.
 */
'use strict';
angular.module('app')
  .config(['$routeProvider',
      function ($routeProvider) {
          var routes = [
              {
                  url: '/home',
                  config: {
                      templateUrl: 'src/features/sample/pageOne.html'
                  }
              }
          ];
          routes.forEach(function (route) {
              $routeProvider.when(route.url, route.config);
          });
          $routeProvider.otherwise({redirectTo: '/home'});
      }]);
