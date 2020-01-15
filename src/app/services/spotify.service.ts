import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Works!');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const tokenSpotify = 'BQCDUToU-W_XF77k2tsXU5UA8Yr8LW7qGg31qaalLMqYkrj_TrB4lZgLFd3JnI-t0O6of7-kjCSGO-vTPbo';

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + tokenSpotify
    });

    return this.http.get(URL, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=50')
      .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
      //.pipe(map(data => data['artists'].items));
  }
}
