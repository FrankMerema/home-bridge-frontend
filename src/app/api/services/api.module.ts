import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HostService} from './host.service';
import {SensorService} from './sensor.service';
import {SwitchService} from './switch.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    HostService,
    SensorService,
    SwitchService
  ]
})
export class ApiModule {
}
