import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiModule } from '@shared/api';
import { IconModule } from '@shared/components';
import { TwoFactorLoginComponent } from './two-factor-login.component';

@NgModule({
  imports: [
    ApiModule.forChild(),
    CommonModule,
    FormsModule,
    IconModule,
    RouterModule
  ],
  declarations: [TwoFactorLoginComponent],
  exports: [TwoFactorLoginComponent]
})
export class TwoFactorLoginModule {
}
