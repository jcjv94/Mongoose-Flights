var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
        // default: 'SAN'
    }, 
    arrival: {
        type: Date
        // default: Date.now()
    }
}, {
    timestamps: true
})

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10, max: 999,
        required: true
    },
    departs: {
        type: Date,
        default: Date.now()
    },
    nowFlying: {
      type: Boolean,
      default: false
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    destination: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);