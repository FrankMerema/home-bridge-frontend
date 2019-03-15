import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sensor } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) {
  }

  getAllSensorsForHost(hostId: string): Observable<Array<Sensor>> {
    return this.http.get<Array<Sensor>>(`/api/sensor/all/${hostId}`);
  }

  addTarget(sensorId: string, targetId: string): Observable<Sensor> {
    return this.http.put<Sensor>(`/api/sensor/${sensorId}/target/${targetId}`, null);
  }

  addSensor(pin: number, hostId: string, name: string, targetId?: string): Observable<Sensor> {
    const sensor = {pin: pin, hostId: hostId, name: name, targetId: targetId};

    return this.http.post<Sensor>(`/api/sensor`, sensor);
  }

  removeSensor(sensorId: string): Observable<void> {
    return this.http.delete<null>(`/api/sensor/${sensorId}`);
  }
}
