import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IconModule} from '../../components';
import {RegisterComponent} from './register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IconModule,
    RouterModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule {
}
