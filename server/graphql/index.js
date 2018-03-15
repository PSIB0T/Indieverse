import { GraphQLObjectType,
         GraphQLString,
         GraphQLSchema,
         GraphQLList} from 'graphql';
import { UserType } from './types';
import { User } from '../../server_prod/mongooes/connect';

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
        }
    })
})

export const schema = new GraphQLSchema({
    query
})