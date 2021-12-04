const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String,require: true},
        image: { type: String, maxlength: 255 },
        decription: { type: String, maxlength: 600 },
        youtubeID: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

const mongooseDelete = require('mongoose-delete');
Course.plugin(mongooseDelete);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('course', Course);
