import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected BASE_URL: string = 'http://localhost:2002/api/v1/';
  protected headers: any;

  constructor(protected http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };
  }

  protected getRequest(url: string) {
    return this.http.get(url, this.headers);
  }

  protected postRequest(url: string, body: any) {
    return this.http.post(url, body, this.headers);
  }
}
