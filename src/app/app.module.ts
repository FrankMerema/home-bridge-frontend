import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ApiModule} from './api/services/api.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {HeaderModule, IconRegistryModule} from './components';
import {HomeComponent} from './home/home.component';
import {SensorComponent} from './sensor/sensor.component';
import {SwitchComponent} from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SensorComponent,
    HomeComponent
  ],
  imports: [
    ApiModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserModule,
    FormsModule,
    IconRegistryModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
