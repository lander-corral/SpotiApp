import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  client_id = "1ec20029ebd54ccd8eaab1c46aedd837";
  client_password = "ccdd1ea482d84f6795716d23e97095c0";
  constructor(private http: HttpClient) {}

  async getToken(): Promise<any> {
    let body = new HttpParams().set("grant_type", "client_credentials");
    let credenciales = btoa(`${this.client_id}:${this.client_password}`);
    return this.http
      .post("https://accounts.spotify.com/api/token", body.toString(), {
        headers: {
          Authorization: `Basic ${credenciales}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .toPromise();
  }

  async getNovedades() {
    /*let datos = await this.getToken();
    let tk = datos.access_token;*/
    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases", {
      /*headers: {
        Authorization: `Bearer ${tk}`
      },*/
      params : {
        country:"ES",
        limit:"40"
      }
    }).toPromise();
  }

  buscar(artista:string){
    return this.http.get('https://api.spotify.com/v1/search', {
      params: {
        q:artista,
        type:'artist'
      }
    });
  }

  getArtista(id){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`);
  }

  getCancionesArtista(id){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`,
    {
      params: {
        market:'ES'
      }
    });
  }
}
