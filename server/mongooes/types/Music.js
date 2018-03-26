import { Schema } from 'mongoose';
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

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
    streamUrl: {
        type: String,
        required: true
    },
    coverArt: {
        type: String,
    },
    featuring: [{
        artistId: Schema.Types.ObjectId
    }]
})

MusicSchema.statics.findMusics = function(musicIds) {
    let musics = [],
        Music = this;
    return new Promise((resolve, reject) => {
        Observable.from(musicIds)
                  .mergeMap(music => {
                      return Observable.fromPromise(Music.findById(music.musicId))
                  })
                  .subscribe(music => {
                      musics.push(music);
                  }, (err) => {
                      reject(err);
                  }, () => {
                      resolve(musics);
                  })
    })
}