import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '@shared/api';
import { IconModule } from '@shared/components';
import { AuthGuard } from './auth.guard';
import { TwoFactorLoginComponent } from './two-factor-login/two-factor-login.component';

@NgModule({
  imports: [
    ApiModule.forChild(),
    CommonModule,
    FormsModule,
    IconModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [TwoFactorLoginComponent]
})
export class AuthenticationModule {
}
