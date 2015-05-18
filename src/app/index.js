'use strict';

angular.module('zillow', ['restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
.config(['RestangularProvider', function (RestangularProvider){
    RestangularProvider.setBaseUrl('http://www.zillow.com/webservice/GetRateSummary.htm');
//    RestangularProvider.setDefaultRequestParams({zws-id: 'X1-ZWz1es2qrpmarv_aau4b'});
   
}])
;