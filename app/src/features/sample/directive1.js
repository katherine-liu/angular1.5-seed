/**
 * sample
 */
'use strict';
angular.module('app')
.controller('sampleCtrl', ['$scope', function ($scope) {
  var vm = this;
  vm.testValue = 'testing';
}])
.directive('sample', function () {
   return {
       restrict: 'E',
       templateUrl: 'src/features/sample/directive1.html'
   }
});
