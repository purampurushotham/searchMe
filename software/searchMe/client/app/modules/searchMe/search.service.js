/**
 * Created by purushotham on 28/3/17.
 */
(function () {
    'use strict';
    angular.module('SM')
        .factory('searchService', searchService);
    searchService.$inject = ['api','$q']
    function searchService(api, q) {
        var searchServices = {
            getUserDetails: getUserDetails
        };
        return searchServices;
        function getUserDetails(query) {
            console.log(query)
            return api.getUserDetails({q: query}).$promise;
        }



    }
}());
