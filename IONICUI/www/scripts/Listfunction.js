// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('App', ['ionic'])//�s��index�� body ng-app="App"

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('HomeCtrl', function ($scope) {
    $scope.items = [
        { id: 1, value: 'Data1' },
        { id: 2, value: 'Data2' },
        { id: 3, value: 'Data3' },
        { id: 4, value: 'Data4' },
        { id: 5, value: 'Data5' },
    ];
    $scope.deleteItem = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    };
    $scope.moveItem = function (item, fromIndex, toIndex) {
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0,item);
    };
});