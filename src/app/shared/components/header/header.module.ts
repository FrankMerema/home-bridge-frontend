import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@shared/components';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
