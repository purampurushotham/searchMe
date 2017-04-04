/**
 * Created by purushotham on 3/4/17.
 */
describe('Search Service',function () {
    var searchService,$q,api,deffered,$injector;
    beforeEach(function () {
        module('SM')
    });
    beforeEach(inject(function (_$q_,_api_,_searchService_,_$resource_,_$injector_) {
        $injector=_$injector_;
        $q=_$q_;
        deffered=$q.defer();
        searchService=_searchService_;
        api=_api_
    }));
    it("get Users",function(){
        var query = {"fields":"firstName"};
        var result = searchService.getUserDetails(query);
        console.log(result)
        expect(result.constructor.name).toEqual('Promise');
    });
});