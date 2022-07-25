const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },

        content: {
            type: String,
            required: true,
            trim: true,
        },
        label:{
            type : String
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;