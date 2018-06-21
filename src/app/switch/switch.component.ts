import {Component, OnInit} from '@angular/core';
import {Host} from '../api/models/host.model';
import {Switch} from '../api/models/switch.model';
import {HostService} from '../api/services/host.service';
import {SwitchService} from '../api/services/switch.service';

@Component({
  selector: 'hb-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  hosts: Array<Host>;
  switchModel: Switch = {host: '', name: '', pin: null};

  constructor(private hostService: HostService,
              private switchService: SwitchService) {
  }

  ngOnInit() {
    this.hostService.getAllHosts()
      .subscribe(hosts => {
        this.hosts = hosts;
      });
  }

  onSwitchSubmit(): void {
    console.log('submitting');
    this.switchService.addSwitch(this.switchModel.pin, this.switchModel.host, this.switchModel.name)
      .subscribe(() => {
        this.switchModel = {host: '', name: '', pin: null};
      });
  }

}
