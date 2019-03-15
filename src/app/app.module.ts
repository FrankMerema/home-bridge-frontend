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

@NgModule({
  imports: [
    ApiModule.forRoot(),
    AppRoutingModule,
    GuardsModule,
    BrowserModule,
    FormsModule,
    IconRegistryModule,
    HeaderModule
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
