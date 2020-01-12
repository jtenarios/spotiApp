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

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    let tokenSpotify = 'BQAOdPrtsVkuuEZJZwVtWYIzDdQwxnj8TjfgqUjgbIrwnaMWAfdA9WpO9__hR1Whe6-T-r6dfjl_kvVGgtE';

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + tokenSpotify
    });

    return this.http.get(URL, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=50')
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
