import mongoose from 'mongoose';
import {UserSchema} from './types';
import config from './../../config';

mongoose.connect(config.mongodb);

export const User = mongoose.model("User", UserSchema);