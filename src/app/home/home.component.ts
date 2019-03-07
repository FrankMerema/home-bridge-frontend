import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {zip} from 'rxjs/index';
import {Host} from '../api/models/host.model';
import {Sensor} from '../api/models/sensor.model';
import {Switch} from '../api/models/switch.model';
import {AuthenticationService} from '../api/services/authentication.service';
import {HostService} from '../api/services/host.service';
import {SensorService} from '../api/services/sensor.service';
import {SwitchService} from '../api/services/switch.service';

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
  QRlink: string;

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

  get2FactorAuthImage(): void {
    this.authenticationService.get2FAuthQRCode()
      .subscribe(url => {
        this.QRlink = url;
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
