/**
 * Created by purushotham on 1/4/17.
 */
'use strict'
describe('home controller',function () {
    var homeController;
    var $controller, $injector, $scope, $rootScope
    var searchService, $q;
    var user;
    var responseResultObj =
    {
        "status" : "ok",

        "data": [
            {  "_id": "58da457d0d32af59df437b50",
                "dateOfBirth": "1992-08-02T18:30:00.000Z",
                "lastName": "puram",
                "firstName": "purushotham",
                "addresses": [
                    {
                        "_id": "58da457d0d32af59df437b4b",
                        "state": "Telangana",
                        "city": "hyderabad",
                        "street": "kphb",
                        "__v": 0

                    },
                    {
                        "_id": "58da457d0d32af59df437b4c",
                        "state": "Andhra pradesh",
                        "city": "tirupati",
                        "street": "stv",
                        "__v": 0
                    }
                ]}],
        "pagination": {
            "total": 1


        }
    }
    beforeEach(function () {
        module('SM');
        module('SM.home');

    });
    beforeEach(inject(function (_$controller_,_$injector_,_$q_,_searchService_,_$rootScope_) {
        $controller=_$controller_;
        $injector=_$injector_;
        $q=_$q_;
        searchService=_searchService_;
        $rootScope=_$rootScope_
        $scope = $rootScope.$new();
    }));
    beforeEach(function () {
        spyOn(searchService, 'getUserDetails').and.callFake(function(query){
            return {
                then: function(callback) {return callback(responseResultObj);}
            };
        });
        it("tracks that the spy was called", function() {
            expect(searchService.getUserDetails).toHaveBeenCalled();
        });

    });
    describe('submitUser', function () {
        user = {
            "firstName" : "purushotham"
        };
        user.pagination = {};
        user.pagination.numberToSkip = 0;
        user.pagination.limito = 2;
        it('given input purushotham', function () {
            var $scope = {};
            var controller = $controller('homeController', { $scope: $scope });
            controller.submitUser(user);
            expect(controller.userTable.length).toBe(1);
            expect(JSON.stringify(controller.userTable)).toBe(JSON.stringify(responseResultObj.data));
        });
    });
});