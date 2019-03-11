import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HostService} from './host.service';
import {SensorService} from './sensor.service';
import {SwitchService} from './switch.service';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        AuthenticationService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        HostService,
        SensorService,
        SwitchService
      ]
    };
  }
}
