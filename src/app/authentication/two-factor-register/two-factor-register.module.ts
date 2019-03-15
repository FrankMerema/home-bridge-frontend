import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiModule } from '@shared/api';
import { IconModule } from '@shared/components';
import { TwoFactorRegisterComponent } from './two-factor-register.component';

@NgModule({
  imports: [
    ApiModule.forChild(),
    CommonModule,
    FormsModule,
    IconModule,
    RouterModule
  ],
  declarations: [TwoFactorRegisterComponent],
  exports: [TwoFactorRegisterComponent]
})
export class TwoFactorRegisterModule {
}
