angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
      console.log("Data is...", data);
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);