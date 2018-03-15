'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MusicType = undefined;

var _graphql = require('graphql');

var _index = require('./index');

var MusicType = exports.MusicType = new _graphql.GraphQLObjectType({
    name: 'Music',
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLID },
            title: { type: _graphql.GraphQLString },
            genre: { type: _graphql.GraphQLString },
            album: { type: _index.AlbumType },
            featuring: {
                type: new _graphql.GraphQLList(_index.UserType)
            }
        };
    }
});
//# sourceMappingURL=Music.js.map