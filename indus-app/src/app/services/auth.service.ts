import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://0.0.0.0:5008/v1'; // this will be used with each API Call

  constructor(private http: HttpClient) {}

  // Service for signup
  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signup-admin`, data);
  }

  // service for signin
  signin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signin-uid`, data);
  }
}
