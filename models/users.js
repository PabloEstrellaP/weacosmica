const { Schema, model } = require('mongoose');

const User = Schema({
    name: {
        type : String,
    },
    imgPath: {
        type: String,
    },
    email: {
        type: String
    }
});


module.exports = model('User', User);