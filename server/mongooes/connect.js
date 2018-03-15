import mongoose from 'mongoose';

import {UserSchema} from './types';

mongoose.connect('mongodb://localhost:27017/indieverse');

export const User = mongoose.model("User", UserSchema);