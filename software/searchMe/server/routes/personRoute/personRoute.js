/**
 * Created by purushotham on 28/3/17.
 */
var mongoose=require('mongoose')
var personModel=require('../../models/personModel/personModel')
var addressModel=require('../../models/addressesModel/addressesModel')
var appUtils=require('../../utils/appUtils')
var personRoute={

    getMultipleFields:function(req,res){
        var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q
        console.log(queryParam.address)
        var QArray=[]
        var query={};
        var tempAddress=query.adddress.split(',')
        console.log(tempAddress)
        
        //var query=appUtils.getGeneralisedQuery(queryParam);
    },
    getUserDetails : function (req,res) {
        var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q
      //  console.log(queryParam)
    }
}
module.exports=personRoute;