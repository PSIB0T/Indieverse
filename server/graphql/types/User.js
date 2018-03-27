import {GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';
import { AlbumType } from '.';
import { Album } from '../../mongooes/connect';

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID },
        firstname: {type: GraphQLString },
        lastname: {type: GraphQLString },
        descripion: {type: GraphQLString },
        email: {type: GraphQLString },
        username: {type: GraphQLString },
        profileImage: {type: GraphQLString },
        coverImage: {type: GraphQLString },
        albums: {
            type: new GraphQLList(AlbumType),
            resolve(parentVal) {
                return Album.findAlbums(parentVal.albums);
            }
        }
    })
})