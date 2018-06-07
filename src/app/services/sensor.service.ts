import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Sensor} from '../models/sensor.model';

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

  addSensor(pin: number, host: string, name: string, targetId?: string): Observable<Sensor> {
    const sensor = {pin: pin, host: host, name: name, targetId: targetId};

    return this.http.post<Sensor>(`/api/sensor`, sensor);
  }

  removeSensor(sensorId: string): Observable<void> {
    return this.http.delete<null>(`/api/sensor/${sensorId}`);
  }
}
