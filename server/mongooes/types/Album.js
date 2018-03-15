import { Schema } from 'mongoose';

export const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    artistId: {
        type: Schema.Types.ObjectId
    },
    date: {
        type: Date,
        default: Date.now
    },
    musics: [{
        musicId: Schema.Types.ObjectId
    }]
})

AlbumSchema.methods.addMusic = function(music) {
    let album = this;
    album.isNew = false;
    console.log(music);
    album.musics.push({
        musicId: music._id
    })
    music.albumId = album._id;
    album.save()
         .then(() => {
             return music.save();
         })
}