/**
 * Created by purushotham on 31/3/17.
 */
var ErrorResult = function( status, message, errors ) {
    this.status = status;
    this.messages = message;
    this.errors = errors;
};
module.exports = ErrorResult;
