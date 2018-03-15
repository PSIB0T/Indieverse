import {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import {UserType, AlbumType} from './index';

export const MusicType = new GraphQLObjectType({
    name: 'Music',
    fields: () => ({
        id: {type: GraphQLID },
        title: {type: GraphQLString },
        genre: {type: GraphQLString },
        album: {type: AlbumType},
        featuring: {
            type: new GraphQLList(UserType)
        }
    })
})