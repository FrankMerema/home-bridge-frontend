import {Component, OnInit} from '@angular/core';
import {Host} from '../api/models/host.model';
import {Sensor} from '../api/models/sensor.model';
import {Switch} from '../api/models/switch.model';
import {HostService} from '../api/services/host.service';
import {SensorService} from '../api/services/sensor.service';
import {SwitchService} from '../api/services/switch.service';

@Component({
  selector: 'hb-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  hosts: Array<Host>;
  sensorModel: Sensor = {host: '', name: '', pin: null};
  switches: Array<Switch>;

  constructor(private hostService: HostService,
              private sensorService: SensorService,
              private switchService: SwitchService) {
  }

  ngOnInit() {
    this.hostService.getAllHosts()
      .subscribe(hosts => {
        this.hosts = hosts;
      });
  }

  onSensorSubmit(): void {
    console.log('submitting');
    this.sensorService.addSensor(this.sensorModel.pin, this.sensorModel.host, this.sensorModel.name, this.sensorModel.targetId)
      .subscribe(() => {
        this.sensorModel = {host: '', name: '', pin: null};
      });
  }

  onHostSelection(selectedHostId: string): void {
    if (selectedHostId) {
      this.switchService.getAllSwitchesForHost(selectedHostId)
        .subscribe(switches => {
          this.switches = switches;
        });
    }
  }
}
