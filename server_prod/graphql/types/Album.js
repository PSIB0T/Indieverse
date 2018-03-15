'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AlbumType = undefined;

var _graphql = require('graphql');

var _ = require('.');

var AlbumType = exports.AlbumType = new _graphql.GraphQLObjectType({
    name: 'Album',
    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLID },
            title: { type: _graphql.GraphQLString },
            descripion: { type: _graphql.GraphQLString },
            artist: { type: _.UserType },
            musics: {
                type: new _graphql.GraphQLList(_.MusicType)
            }
        };
    }
});
//# sourceMappingURL=Album.js.map