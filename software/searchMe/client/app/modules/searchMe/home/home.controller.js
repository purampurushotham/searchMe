/**
 * Created by purushotham on 28/3/17.
 */
(function () {
    'use strict';
    angular.module('SM.home')
        .controller('homeController',homeController);
    homeController.$inject=['searchService', 'NgTableParams', '$filter']
    function homeController(searchService, NgTableParams, $filter) {
        var vm = this;
        vm.user = {};

        vm.submitUser = function (user) {
            if (user.dateOfBirth == null && user.firstName == null && user.lastName == null && user.address == null) {
                vm.errorMessage = true;
            }
            else {
                vm.errorMessage = false;
                vm.tableParams.reload();
            }
        };
        vm.loadTable = function () {
            vm.tableParams = new NgTableParams({
                    page: 1,
                    count: 1
                },
                {
                    counts: [2, 5, 10, 25, 50, 100],
                    getData: function (params) {
                        var query = {
                            user: vm.user,
                            page_size: params.count() === -1 ? 0 : params.count(),
                            page: (params.page() - 1) * params.count(),
                            sortingCriteria: params.sorting()
                        };
                         searchService.getUserDetails(query).then(function (response) {
                            vm.userTable = response.data;
                            params.total(response.pagination.total);
                            var filterObj = params.filter(), filteredData = $filter('filter')(vm.userTable, filterObj);
                            var sortObj = params.sorting(), orderedData = $filter('orderBy')(filteredData, filterObj);
                            var data = orderedData;
                            return data;
                        });
                    }

                });
        }
        vm.loadTable();
    }
}());