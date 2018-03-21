import mongoose from 'mongoose';
import {UserSchema, 
        AlbumSchema,
        MusicSchema} from './types';
import config from './../../config';

mongoose.connect(config.mongodb);

export const User = mongoose.model("User", UserSchema);
export const Album = mongoose.model("Album", AlbumSchema);
export const Music = mongoose.model("Music", MusicSchema);