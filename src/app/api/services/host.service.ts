import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Host, HostStatus } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private http: HttpClient) {
  }

  getAllHosts(): Observable<Array<Host>> {
    return this.http.get<Array<Host>>(`/api/host/all`);
  }

  getHost(hostIp: string): Observable<Host> {
    return this.http.get<Host>(`/api/host/${hostIp}`);
  }

  getHostStatus(hostIp: string): Observable<HostStatus> {
    return this.http.get<HostStatus>(`/api/host/${hostIp}/status`);
  }
}
