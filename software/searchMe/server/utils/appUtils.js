/**
 * Created by purushotham on 28/3/17.
 */
var mongoose=require('mongoose')
var personModel=require('../models/personModel/personModel')
var addressesModel=require('../models/addressesModel/addressesModel');
var appUtils ={
    getGeneralisedQuery: function(query){
        var QArray=[];
        if(tempAddress.length >0 && tempAddress.length <=4 ){
            query.street=tempAddress[0];
            QArray.push(query);
        }
        if(tempAddress.length >0 && tempAddress.length <= 3 ){
            query.houseNo=tempAddress[1];
            QArray.push(query);
        }
        if(tempAddress.length >0 && tempAddress.length <= 2 ){
            query.houseNo=tempAddress[2];
            QArray.push(query);
        }
        if(tempAddress.length >0 && tempAddress.length <= 1 ){
            query.houseNo=tempAddress[3];
            QArray.push(query);
        }
    }
}
module.exports=appUtils