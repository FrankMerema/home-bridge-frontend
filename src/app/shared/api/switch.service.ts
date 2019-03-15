import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Switch } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor(private http: HttpClient) {
  }

  getAllSwitchesForHost(hostId: string): Observable<Array<Switch>> {
    return this.http.get<Array<Switch>>(`/api/switch/all/${hostId}`);
  }

  getSwitchState(switchId: string): Observable<Switch> {
    return this.http.get<Switch>(`/api/switch/status/${switchId}`);
  }

  toggelSwitcHState(switchId: string): Observable<Switch> {
    return this.http.post<Switch>(`/api/switch/status/${switchId}`, null);
  }

  addSwitch(pin: number, hostId: string, name: string): Observable<Switch> {
    const newSwitch = {pin: pin, hostId: hostId, name: name};
    return this.http.post<Switch>(`/api/switch`, newSwitch);
  }

  removeSwitch(switchId: string): Observable<void> {
    return this.http.delete<null>(`/api/switch/${switchId}`);
  }
}
