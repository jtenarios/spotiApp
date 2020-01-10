import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Works!');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKt333Z-O6y6WxAdSvynZxNaMeQasGBk1o9I0QIluuYCDB2sq_JjXLbbUG0CnUFRUtF1vs2i3FCi4Rv0g'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKt333Z-O6y6WxAdSvynZxNaMeQasGBk1o9I0QIluuYCDB2sq_JjXLbbUG0CnUFRUtF1vs2i3FCi4Rv0g'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map(data => data['artists'].items));
  }
}
