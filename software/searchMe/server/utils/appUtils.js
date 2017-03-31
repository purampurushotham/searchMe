/**
 * Created by purushotham on 28/3/17.
 */
var mongoose=require('mongoose')
var personModel=require('../models/personModel/personModel')
var addressesModel=require('../models/addressesModel/addressesModel');
var appUtils ={
    getGeneralisedQuery: function(query){
        var QArray=[];
        var queryObject=[]
        if(query.firstName){
            QArray.push({"firstName" : query.firstName});
        }
        if(query.lastName){
            QArray.push({"lastName" : query.lastName});
        }
        if(query.dateOfBirth && query.dateOfBirth != null){
            QArray.push({"dateOfBirth" : new Date(query.dateOfBirth)});
        }
        if(QArray.length > 0){
            queryObject.push({"$match" : {$or : QArray}})
        }
        return queryObject;
    }
}
module.exports=appUtils;