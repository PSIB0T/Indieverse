import { IMusic } from './iMusic';
import { IArtist } from './iArtist';

export interface IAlbum {
    title: String;
    description: String;
    date: Date;
    music: IMusic[];
    artist: IArtist;
};
