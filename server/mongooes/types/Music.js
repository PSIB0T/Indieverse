import { Schema } from 'mongoose';

export const MusicSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    albumId: {
        type: Schema.Types.ObjectId
    },
    featuring: [{
        artistId: Schema.Types.ObjectId
    }]
})