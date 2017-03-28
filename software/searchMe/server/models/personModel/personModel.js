/**
 * Created by purushotham on 28/3/17.
 */
var mongoose = require("mongoose");
var Schema=mongoose.Schema;
var schemaTypes=mongoose.Schema.Types;
var personSchema=new Schema({
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        dateOfBirth: {
            type: Date,
            trim: true
        },
        addresses: [{
            type: schemaTypes.ObjectId,
            ref: 'addresses',
            trim: true
        }]
    },
    {collection : 'person'}
);
var personModel=mongoose.model('person',personSchema);
module.exports=personModel;
