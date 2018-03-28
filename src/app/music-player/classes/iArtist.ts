import { IAlbum } from './iAlbum';

export interface IArtist {
    id?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    descripion?: string;
    email?: string;
    username?: string;
    coverImage?: string;
    profileImage?: string;
    albums?: IAlbum[]
};
