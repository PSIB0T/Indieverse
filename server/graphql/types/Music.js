import {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import GraphQLDate from 'graphql-date';
import {UserType, AlbumType} from './index';

export const MusicType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: {type: GraphQLID },
        title: {type: GraphQLString },
        genre: {type: GraphQLString },
        date: {type: GraphQLDate},
        album: {type: AlbumType},
        featuring: {
            type: new GraphQLList(UserType)
        }
    })
})