import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, HostService, SensorService, SwitchService } from '@shared/api';
import { Host, Sensor, Switch } from '@shared/models';
import { zip } from 'rxjs';

@Component({
  selector: 'hb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hosts: Array<Host>;
  selectedHost: Host;
  selectedSensor: Sensor;
  selectedSwitch: Switch;
  sensors: Array<Sensor>;
  switches: Array<Switch>;

  constructor(private hostService: HostService,
              private sensorService: SensorService,
              private switchService: SwitchService,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.hostService.getAllHosts()
      .subscribe(hosts => {
        this.hosts = hosts;
      });
  }

  getHardwareForHost(): void {
    zip(
      this.sensorService.getAllSensorsForHost(this.selectedHost.id),
      this.switchService.getAllSwitchesForHost(this.selectedHost.id)
    ).subscribe(([sensors, switches]) => {
      this.sensors = sensors;
      this.switches = switches;
    });
  }

  doLog(selectedItem: any): void {
    console.log(selectedItem);
  }

  logout(): void {
    this.authenticationService.logout()
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
