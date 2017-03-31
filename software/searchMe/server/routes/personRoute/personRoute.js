/**
 * Created by purushotham on 28/3/17.
 */
var mongoose=require('mongoose')
var personModel=require('../../models/personModel/personModel')
var addressModel=require('../../models/addressesModel/addressesModel')
var appUtils=require('../../utils/appUtils')
var SuccessResponse=require('../../models/successResponse/successResponse')
var ErrorResult=require('../../models/errorResult/errorResult')
var personRoute={
    getUserDetails : function (req,res) {
        var queryParam = (req.query && req.query.q) ? JSON.parse(req.query.q) : req.body.q
        console.log(queryParam)
        if(queryParam.user.dateOfBirth!=null){
        var queryObject=appUtils.getGeneralisedQuery(queryParam.user);
        console.log(queryObject)
        queryObject.push({"$unwind": "$addresses"},
            {"$lookup": {"from": "addresses", "localField": "addresses", "foreignField": "_id", "as": "address"}});
        if(queryParam.address){
            queryObject.push({
                "$match": {
                    $or: [{"address.city": queryParam.address}, {"address.street": queryParam.address},
                        {"address.state": queryParam.address}]
                }
            })
        }
        queryObject.push({"$unwind": "$address"}, {
                "$group": {
                    "_id": "$_id", "userDetails": {
                        "$addToSet": {
                            "address": "$address",
                            "user": {
                                "_id": "$_id", "firstName": "$firstName", "lastName": "$lastName",
                                "dateOfBirth": "$dateOfBirth"
                            }
                        }
                    }
                }
            },
            {"$project": {"userDetails.address": 1, "user": {"$arrayElemAt": ["$userDetails.user", 0]}}});
        console.log(queryObject);
        personModel.aggregate(queryObject).skip(queryParam.page).limit(queryParam.page_size).exec(function (err, userObject) {
            if (err) {
                console.log(err);
                return res.json(new ErrorResult("failed","query is failed",[{"msg": "error"}]))
            } else {
                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                console.log(userObject)
                personModel.aggregate(queryObject).exec(function(err1,total){
                   if(err1){
                       return res.json(new ErrorResult("failed","query is failed",[{"msg": "error"}]))
                   }else {
                       console.log("&&&&&&&&&&&&&&&&&&&")
                       console.log(total)
                        var pagination={}
                       pagination.total=total.length
                       res.send(new SuccessResponse("ok",userObject,pagination,"success"));
                   }
                });

            }
        });
    }
        else {
            return res.json(new ErrorResult("failed","query is failed",[{"msg": "error"}]))
        }
    }
}
module.exports=personRoute;