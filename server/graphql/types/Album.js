import {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';
import GraphQLDate from 'graphql-date';
import { MusicType, UserType } from '.';
import { User, Music } from '../../mongooes/connect';

export const AlbumType = new GraphQLObjectType({
    name: 'Album',
    fields: () => ({
        id: {type: GraphQLID },
        title: {type: GraphQLString },
        descripion: {type: GraphQLString },
        date: {type: GraphQLDate},
        albumArt: {type: GraphQLString },
        artist: {
            type: UserType,
            resolve(parentVal) {
                return User.findById(parentVal.artistId)
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            resolve(parentVal) {
                return Music.findMusics(parentVal.musics)
            }
        }
    })
})