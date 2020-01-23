import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent implements OnInit {
  private album:any;
  private canciones:any[];
  constructor(private servicio:SpotifyService,
    private ruta:ActivatedRoute) {
    this.servicio.getAlbum(ruta.snapshot.params.id).subscribe(
      (datos) => {
        this.album = datos;
        console.log(this.album)
      }
    );
    this.servicio.getCancionesAlbum(ruta.snapshot.params.id).subscribe(
      (datos:any) => {
        this.canciones = datos.items;
        console.log(this.canciones)
      }
    );
   }

  ngOnInit() {
  }

}
