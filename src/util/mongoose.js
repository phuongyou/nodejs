module.exports = {
    multiMongooseObject:  function (mongooses) {
        return mongooses = mongooses.map(mongoose =>mongoose.toObject())
    },
    singleMongooseObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}