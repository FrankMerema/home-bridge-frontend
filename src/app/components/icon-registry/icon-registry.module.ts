import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IconRegistryComponent} from './icon-registry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconRegistryComponent],
  exports: [IconRegistryComponent]
})
export class IconRegistryModule {
}
