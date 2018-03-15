'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = undefined;

var _graphql = require('graphql');

var query = new _graphql.GraphQLObjectType({
    name: 'query',
    fields: function fields() {
        return {
            hello: {
                type: _graphql.GraphQLString,
                args: {},
                resolve: function resolve(parentVal, args) {
                    return "Hello World";
                }
            }
        };
    }
});

var schema = exports.schema = new _graphql.GraphQLSchema({
    query: query
});
//# sourceMappingURL=index.js.map