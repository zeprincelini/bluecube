import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getEndpoint = `https://api.unsplash.com/photos?client_id=${environment.unsplashApi}`;
  searchEndpoint = `https://api.unsplash.com/search/photos?client_id=${environment.unsplashApi}&query=`;
  headers = new HttpHeaders().set(
    'authorization',
    `Client-ID ${environment.unsplashApi}`
  );
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http.get(this.getEndpoint, { headers: this.headers });
  }

  searchImages(search: string) {
    return this.http.get(`${this.searchEndpoint}${search}`, {
      headers: this.headers,
    });
  }
}
