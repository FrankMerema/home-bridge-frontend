import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './authentication/auth.guard';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {TwoFactorLoginComponent} from './authentication/two-factor-login/two-factor-login.component';
import {HomeComponent} from './home/home.component';
import {SensorComponent} from './sensor/sensor.component';
import {SwitchComponent} from './switch/switch.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'sensor/add',
      component: SensorComponent
    }, {
      path: 'switch/add',
      component: SwitchComponent
    }
  ]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'authenticate',
  component: TwoFactorLoginComponent,
  canActivate: [AuthGuard]
}, {
  path: 'register',
  component: RegisterComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
