/**
 * Created by purushotham on 1/4/17.
 */
'use strict'
describe('home controller',function () {
    var homeController;
    var $controller, $injector, $scope, $rootScope
    var searchService, $q,moment;
    var user,address;
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
    };
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
    //test case for submit user
    describe('submitUser', function () {
        user = {
            "firstName" : "PURUSHOTHAM"
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
            expect(controller.total).toBe(responseResultObj.pagination.total)
        });
        //test case for date
        it('uses the mocked time with moment', function() {
            var dateofBirth=new Date(responseResultObj.data[0].dateOfBirth).toLocaleDateString();
            console.log(dateofBirth)
            expect(dateofBirth).toEqual("03/08/1992");
        });
    });
    // test cases for client side validations
    describe('user', function () {
        user = {
            "firstName": responseResultObj.data[0].firstName,
            "lastName" :responseResultObj.data[0].lastName
        };
        address={
            "street" : responseResultObj.data[0].addresses[0].street,
            "state"  : responseResultObj.data[0].addresses[0].state,
            "city" : responseResultObj.data[0].addresses[0].city
        };
        //test case for minimum length of user
        it("user names length",function () {
            expect(user.firstName.length).toBeGreaterThanOrEqual(4);
            expect(user.lastName.length).toBeGreaterThanOrEqual(4)
        });
        it("user names length",function () {
            expect(user.firstName.length).toBeLessThanOrEqual(20)
            expect(user.lastName.length).toBeLessThanOrEqual(20)
        });
        //test case for minimum length of address
        it("addresses maximum length",function () {
            expect(address.street.length).toBeLessThanOrEqual(20)
            expect(address.city.length).toBeLessThanOrEqual(20);
            expect(address.state.length).toBeLessThanOrEqual(20)
        });
        it("addresses minimum length",function () {
            expect(address.street.length).toBeGreaterThanOrEqual(4);
            expect(address.state.length).toBeGreaterThanOrEqual(4)
            expect(address.city.length).toBeGreaterThanOrEqual(4)
        });
        //check user is empty
        it('given input empty', function () {
            user = {};
            var $scope = {};
            var controller = $controller('homeController', { $scope: $scope });
            controller.submitUser(user);
            expect(controller.errorMessage).toEqual(true);
        });
    });
});
