import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from '@shared/api';
import { HeaderModule, IconRegistryModule } from '@shared/components';
import { GuardsModule } from '@shared/guards';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SensorComponent } from './sensor/sensor.component';
import { SwitchComponent } from './switch/switch.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    ApiModule.forRoot(),
    AppRoutingModule,
    GuardsModule,
    BrowserModule,
    FormsModule,
    IconRegistryModule,
    HeaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    SwitchComponent,
    SensorComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
