/**
 * Created by purushotham on 28/3/17.
 */
(function () {
    'use strict';
    angular.module('SM.home')
        .component('homeComponent',{
            templateUrl: "app/partials/userDetails.html",
            controller : homeCtrl,
            controllerAs : "hm"
        });
    homeCtrl.$inject=['searchService','NgTableParams','$filter']
    function homeCtrl(searchService,NgTableParams,$filter){
        console.log("in home controller");
        var vm=this;
        vm.user={};
        vm.getUserDetails=function(){
            var query=vm.user;
            if(vm.user.dateOfBirth == null){
                vm.errorMessage=true;
            }
            else{
                vm.errorMessage=false;
                loadTable();
            }

        };
        function loadTable(){
            vm.tableParams = new NgTableParams({
                page:1,
                count: 1

            },
                {
                counts : [2,5,10,25,50,100],
                getData: function (params) {
                    var query={
                        user: vm.user,
                        page_size : params.count()=== -1 ? 0 : params.count(),
                        page : (params.page()-1) * params.count(),
                        sortingCriteria : params.sorting()
                    };
                    console.log(query)
                    return searchService.getUserDetails(query).then(function (response) {
                        vm.userTable = response.data;
                        console.log(response)
                        console.log(vm.userTable)
                        params.total(response.pagination.total);
                        var filterObj = params.filter(),filteredData = $filter('filter')(vm.userTable, filterObj);
                        var sortObj = params.sorting(), orderedData = $filter('orderBy')(filteredData, filterObj);
                        var data= orderedData;
                        console.log(data)
                        return data;
                    });
                }

            });
        }
    }
}());