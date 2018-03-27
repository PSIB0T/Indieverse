import { Schema } from 'mongoose';
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

export const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    albumArt: {
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

AlbumSchema.statics.findAlbums = function(albumIds) {
    let albums = [],
        Album = this;
    return new Promise((resolve, reject) => {
        Observable.from(albumIds)
                  .mergeMap(album => {
                      return Observable.fromPromise(Album.findById(album.albumId))
                  })
                  .subscribe(album => {
                      albums.push(album);
                  }, (err) => {
                      reject(err);
                  }, () => {
                      resolve(albums);
                  })
    })
}