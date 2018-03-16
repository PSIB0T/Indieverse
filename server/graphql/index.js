import { GraphQLObjectType,
         GraphQLString,
         GraphQLSchema,
         GraphQLList} from 'graphql';
import { UserType, AlbumType, MusicType } from './types';
import { User, Album, Music } from '../mongooes/connect';

const query = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            args: {},
            resolve(parentVal, args) {
                return "Hello World";
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentVal, args) {
                return User.find();
            }
        },
        albums: {
            type: new GraphQLList(AlbumType),
            resolve(parentVal, args) {
                return Album.find();
            }
        },
        musics: {
            type: new GraphQLList(MusicType),
            resolve(parentVal, args) {
                return Music.find();
            }
        }
    })
})

export const schema = new GraphQLSchema({
    query
})