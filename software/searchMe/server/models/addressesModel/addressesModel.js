/**
 * Created by purushotham on 28/3/17.
 */
var mongoose = require("mongoose");
var Schema=mongoose.Schema
var schemaTypes=mongoose.Schema.Types
var addressSchema=new Schema({
        street: {
            type: String,
            trim: true
        },
        houseNo: {
            type: String,
            trim: true

        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        }
    },
    {collection : 'addresses'}
);
var addressModel=mongoose.model('addresses',addressSchema)
module.exports=addressModel;