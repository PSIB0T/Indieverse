'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserSchema = undefined;

var _mongoose = require('mongoose');

var UserSchema = exports.UserSchema = new _mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    albums: [{
        albumId: _mongoose.Schema.Types.ObjectId
    }]
});
//# sourceMappingURL=User.js.map