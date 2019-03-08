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
    return this.http.get<User>(`/api/user/current`);
  }

  authenticate(username: string, password: string): Observable<User> {
    return this.http.post<User>(`/api/user/authenticate`, {username: username, password: password})
      .pipe(map(user => {
        this.currentUser = user;

        return user;
      }));
  }

  register(user: { username: string, password: string, passwordRepeated: string }): Observable<User> {
    return this.http.post<User>(`/api/user`, user);
  }

  get2FAuthQRCode(username: string): Observable<string> {
    return this.http.post<string>(`/api/user//add2factor/${username}`, {});
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(`/api/user/logout`, null);
  }
}
