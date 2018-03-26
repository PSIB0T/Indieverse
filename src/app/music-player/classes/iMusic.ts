import { IAlbum } from './iAlbum';
import { IArtist } from './iArtist';

export interface IMusic {
    title?: String;
    streamUrl?: String;
    coverArt?: String;
    album?: IAlbum;
    featuring?: IArtist[];
};
