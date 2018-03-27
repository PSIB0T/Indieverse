import { IMusic } from './iMusic';
import { IArtist } from './iArtist';

export interface IAlbum {
    id?: String;
    title?: String;
    description?: String;
    date?: Date;
    musics?: IMusic[];
    artist?: IArtist;
    albumArt?: string;
};
