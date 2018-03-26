import { IAlbum } from './iAlbum';

export interface IArtist {
    id: string;
    firstname: string;
    lastname: string;
    descripion: string;
    email: string;
    username: string;
    albums: IAlbum[]
};
