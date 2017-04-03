/**
 * Created by purushotham on 1/4/17.
 */
(function () {
   'use strict'
    angular.module('SM.userTable')
        .component("userTable", {
            templateUrl  :"app/partials/userTable.html",
            controller : userTable,
            controllerAs : "tm",
            bindings :{
                tableParams : '='
            }
        });
    function userTable() {
        var vm = this;
        console.log(vm.tableParams)
    }
}())