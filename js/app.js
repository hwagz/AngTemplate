angular
  .module('angtemp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/url1',{
      templateUrl: "html/url1.html",
      controller: "url1Ctrl"
    })
    .when('/url2',{
      templateUrl: "html/url2.html",
      controller: "url2Ctrl"
    })
    .when('/url3',{
      templateUrl: "html/url3.html",
      controller: "url3Ctrl"
    })
    .otherwise({
      templateUrl: "html/main.html",
      controller: "mainCtrl"
    });
  })
  .controller('mainCtrl', ['$scope','$filter',function($scope, $filter) {
    $scope.msg = "Test message main";
  }])
  .controller('url1Ctrl', ['$scope','$filter',function($scope, $filter) {
    $scope.msg = "Test message 1";
  }])
  .controller('url2Ctrl', ['$scope','$filter',function($scope, $filter) {
    $scope.msg = "Test message 2";
  }])
  .controller('url3Ctrl', ['$scope','$filter',function($scope, $filter) {
    $scope.msg = "Test message 3";
  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
})
