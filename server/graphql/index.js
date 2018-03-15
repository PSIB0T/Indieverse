import { GraphQLObjectType,
         GraphQLString,
         GraphQLSchema} from 'graphql';

const query = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            args: {},
            resolve(parentVal, args) {
                return "Hello World";
            }
        }
    })
})

export const schema = new GraphQLSchema({
    query
})