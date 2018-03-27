import { IAlbum } from './iAlbum';
import { IArtist } from './iArtist';

export interface IMusic {
    id?: string
    title?: string;
    streamUrl?: string;
    coverArt?: string;
    album?: IAlbum;
    featuring?: IArtist[];
};
