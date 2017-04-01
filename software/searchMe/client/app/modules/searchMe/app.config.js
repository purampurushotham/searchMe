/**
 * Created by purushotham on 28/3/17.
 */
(function () {
    'use strict';
    angular.module('SM')
        .config(appConfig);
    appConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function appConfig($stateProvider,$urlRouterProvider){
        console.log("app config");
        $urlRouterProvider.otherwise('home')
        $stateProvider
            .state('home',{
                url : "/home",
                templateUrl  :"app/partials/home.html",
                controller : 'homeController',
                controllerAs : 'hm'

            });
    }
}())