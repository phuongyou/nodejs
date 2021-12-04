const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/blog_dev');
        console.log('Connect Sucessful !!!');
    } catch (error) {
        console.log('Connect Fail !!!');
    }
}

module.exports = { connect };
