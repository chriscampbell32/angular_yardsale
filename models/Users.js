var mongoose = require('mongoose');
var Schema = mongoos.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }
});