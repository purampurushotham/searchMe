/**
 * Created by purushotham on 28/3/17.
 */
(function () {
    'use strict';
    angular.module('SM.header')
        .component("headerComponent",{
            templateUrl : "app/partials/header.html",
            controller :headerCtrl,
            controllerAs : "hc"
        });
    function headerCtrl() {
        console.log("header component")
        var vm=this;
    }
}());