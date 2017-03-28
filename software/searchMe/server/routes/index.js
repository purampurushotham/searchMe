var express = require('express');
var personRoute=require('./personRoute/personRoute')
var appRoutes=function(app) {
console.log("in appRoutes")
    app.get('/api/v1.0/getMultipleFields',personRoute.getMultipleFields)
    app.get('/api/v1.0/getUserDetails',personRoute.getUserDetails)
}
module.exports = appRoutes;
