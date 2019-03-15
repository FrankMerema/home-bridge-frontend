import { NgModule } from '@angular/core';
import { ApiModule } from '@shared/api';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    ApiModule.forChild()
  ],
  providers: [
    AuthGuard
  ]
})
export class GuardsModule {
}
