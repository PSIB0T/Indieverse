import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true        
    },
    profileImage: {
        type: String
    },
    coverImage: {
        type: String
    },
    albums: [{
        albumId: Schema.Types.ObjectId
    }]
})

UserSchema.methods.addAlbum = function(album) {
    let user = this;
    user.isNew = false;
    console.log(album);
    user.albums.push({
        albumId: album._id
    })
    album.artistId = user._id
    return user.save()
               .then(() => {
                   return album.save()
               })
}