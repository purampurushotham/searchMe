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
            getUserDetails: getUserDetails,
            getMultipleFields: getMultipleFields
        };
        return searchServices;
        
        function getMultipleFields(query) {
            return api.getMultipleFields({q: query}).$promise;
        }
        function getUserDetails(query) {
            return api.getUserDetails({q: query}).$promise;
        }



    }
}());
