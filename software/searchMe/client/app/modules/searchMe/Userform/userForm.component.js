/**
 * Created by purushotham on 1/4/17.
 */
(function () {
    'use strict';
    angular.module('SM.userform')
        .component('userFormComponent', {
            templateUrl: "app/partials/userDetails.html",
            controller: formCtrl,
            controllerAs: "uc",
            bindings :{
                user : "=",
                submitUser : "&"
            }
        });
    function formCtrl(){
        var vm=this;

    }

}())