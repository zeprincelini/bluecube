import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = 'https://api.unsplash.com/photos';
  headers = new HttpHeaders().set(
    'authorization',
    `Client-ID ${environment.unsplashApi}`
  );
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http.get(this.endpoint, { headers: this.headers });
  }
}
