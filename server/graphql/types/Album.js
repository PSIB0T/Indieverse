import {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';
import { MusicType, UserType } from '.';

export const AlbumType = new GraphQLObjectType({
    name: 'Album',
    fields: () => ({
        id: {type: GraphQLID },
        title: {type: GraphQLString },
        descripion: {type: GraphQLString },
        artist: {type: UserType},
        musics: {
            type: new GraphQLList(MusicType)
        }
    })
})