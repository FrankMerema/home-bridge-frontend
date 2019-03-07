import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`/api/user/current`);
  }

  authenticate(username: string, password: string): Observable<User> {
    return this.http.post<User>(`/api/user/authenticate`, {username: username, password: password});
  }

  register(user: {username: string, password: string, passwordRepeated: string}): Observable<User> {
    return this.http.post<User>(`/api/user`, user);
  }

  get2FAuthQRCode(): Observable<string> {
    return this.http.post<string>(`/api/user/test`, {});
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(`/api/user/logout`, null);
  }
}
