import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from 'app/music/music.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadAlbumComponent } from './upload-album/upload-album.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'uploadAlbum', component: UploadAlbumComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}

