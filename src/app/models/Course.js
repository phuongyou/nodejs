const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, default: '' },
    image: { type: String, maxlength: 255 },
    desciption: { type: String, maxlength: 600 },
    slug:{ type: String, maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('course', Course);