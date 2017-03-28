/**
 * Created by purushotham on 28/3/17.
 */
var mongoose=require('mongoose')
var dateFormat=require('dateformat');
var moment=require('moment');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/searchMe');
var mydb=mongoose.connection;
var Q=require('q');
var fs=require('fs');
var person=require('./models/personModel/personModel');
var addresses=require('./models/addressesModel/addressesModel');
var contents=fs.readFileSync('../client/data.json')
var jsonContents=JSON.parse(contents)
console.log(jsonContents)
for(var i=0;i<jsonContents.length;i++){
    insert(jsonContents[i]);
}
function insert(eachPerson){
    var newPerson=new person();
    newPerson.firstName=eachPerson.firstName;
    newPerson.lastName=eachPerson.lastName;
    var date = moment(eachPerson.dateOfBirth.toString(), 'DD/MM/YYYY');
    var formatedDate = date.format('MM/DD/YYYY');
    var formatedIso = dateFormat(formatedDate, "isoDateTime");
    newPerson.dateOfBirth=formatedIso;
    newPerson.addresses=[]
    var promises=[];
    eachPerson.addresses.forEach(function (eachAddress){
        promises.push(insertAddress(newPerson,eachAddress));
    });

    Q.allSettled(promises).then(function (response) {
        newPerson.save(function (err) {
            if(err){
                console.log(err)
            }
            else{
                console.log("success")
            }
        });
    });
}
function insertAddress(person,address) {
    var deffered = Q.defer();
    var newAddress = new addresses();
    newAddress.street = address.street;
    newAddress.houseNo = address.houseNo;
    newAddress.city = address.city;
    newAddress.state = address.state;
    newAddress.save(function (err) {
        if (err) {
            deffered.reject(err)
        }
        else {
            person.addresses.push(newAddress._id);
            deffered.resolve()
        }
    });
    return deffered.promise;

}
