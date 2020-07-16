const mongoose = require("mongoose");

const options = {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
};

const schema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        datetime: {
            type: Date,
            default: new Date(),
            required: true
        },
        lifts: {
            type: String,
            required: true,
        }
    },
    options
);

const Lift = mongoose.model("Lift", schema);

module.exports.Lift = Lift;
