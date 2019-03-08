import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: User;

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`/api/user/current`)
      .pipe(map(user => this.currentUser = user));
  }

  authenticate(username: string, password: string): Observable<User> {
    return this.http.post<User>(`/api/user/authenticate`, {username: username, password: password})
      .pipe(map(user => this.currentUser = user));
  }

  register(user: { username: string, password: string, passwordRepeated: string }): Observable<User> {
    return this.http.post<User>(`/api/user`, user)
      .pipe(map(user => this.currentUser = user));
  }

  get2FAuthQRCode(username: string): Observable<string> {
    return this.http.post<string>(`/api/user/add2factor/${username}`, {username: username});
  }

  verify2FactorAuthCode(username: string, token: string): Observable<{ verified: boolean }> {
    return this.http.get<{ verified: boolean }>(`/api/user/verify2factor/${username}/${token}`);
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(`/api/user/logout`, null);
  }
}
