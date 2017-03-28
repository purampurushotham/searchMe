(function() {
    'use strict';

    angular.module('SM')
        .factory('api', api);
    api.$inject = ['$resource', '$rootScope'];

    function api ($resource, $rootScope) {
        return $resource('/', getParamDefaults(), getActions($rootScope));
    }
    var getParamDefaults = function () {
        return {
            id : '@id'
        };
    };
    var getActions = function() {
        return {
            'getUserDetails': {
                method: "GET",
                url: "/api/v1.0/getUserDetails"
            },
            'getMultipleFields' : {
                method: "GET",
                url: "/api/v1.0/getMultipleFields"
            }
        }
    }
}());