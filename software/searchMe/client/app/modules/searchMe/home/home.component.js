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
    homeCtrl.$inject=['searchService','NgTableParams']
    function homeCtrl(searchService,NgTableParams){
        console.log("in home controller");
        var vm=this;
        vm.user={}
        vm.getUserDetails=function(){
            console.log(vm.user);
            var query=vm.user;
            searchService.getUserDetails(query).then(
                function (response) {
                    console.log(response)
                },
                function (error) {
                    console.log(error)
                }
            );
        };
        function loadTable(){
            vm.tableParams = new NgTableParams({
                page:1,
                count: 2

            },{
                counts : [2,5,10,25,50,100],
                getData: function (params) {
                    var query={
                        page_size : params.count()=== -1 ? 0 : params.count(),
                        page : (params.page()-1) * params.count(),
                        sortingCriteria : params.sorting()
                    };
                    return searchService.getMultipleFields(query).then(function (response) {
                        vm.userTable = response.data;
                        vm.courses=checkAvailableSeats(vm.userTable);
                        $localStorage.courseDetails=[];
                        for (var i = 0; i < response.data.length; i++) {
                            $localStorage.courseDetails.push(response.data[i])
                        }
                        params.total(response.pagination.total);
                        var filterObj = params.filter(),filteredData = $filter('filter')(vm.courses, filterObj);
                        var sortObj = params.sorting(), orderedData = $filter('orderBy')(filteredData, filterObj);
                        var data= orderedData;
                        return data;
                    });
                }

            });
        }
    }
}());