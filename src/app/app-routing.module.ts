import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AlbumComponent } from './componentes/album/album.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'artista/:id', component:ArtistaComponent},
  {path:'busqueda', component:BusquedaComponent},
  {path:'album/:id', component:AlbumComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
