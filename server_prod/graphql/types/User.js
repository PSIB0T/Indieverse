'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserType = undefined;

var _graphql = require('graphql');

var _ = require('.');

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLID },
            firstname: { type: _graphql.GraphQLString },
            lastname: { type: _graphql.GraphQLString },
            descripion: { type: _graphql.GraphQLString },
            email: { type: _graphql.GraphQLString },
            username: { type: _graphql.GraphQLString },
            albums: {
                type: new _graphql.GraphQLList(_.AlbumType)
            }
        };
    }
});
//# sourceMappingURL=User.js.map