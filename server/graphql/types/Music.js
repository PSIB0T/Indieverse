import {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import GraphQLDate from 'graphql-date';
import {UserType, AlbumType} from './index';
import { Album } from '../../mongooes/connect';

export const MusicType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: {type: GraphQLID },
        title: {type: GraphQLString },
        genre: {type: GraphQLString },
        date: {type: GraphQLDate},
        album: {
            type: AlbumType,
            resolve(parentVal) {
                return Album.findById(parentVal.albumId)
            }
        },
        featuring: {
            type: new GraphQLList(UserType)
        }
    })
})