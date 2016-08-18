angular
  .module('APPNAME',[])
  .controller("APPNAMECtrl", ['$scope','$filter','$compile',function($scope, $filter, $compile) {

  }])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
    }
})
