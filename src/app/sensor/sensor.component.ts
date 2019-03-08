import { Component, OnInit } from '@angular/core';
import { HostService, SensorService, SwitchService } from '@shared/api';
import { Host, Sensor, Switch } from '@shared/models';

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
