import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalizationAdapter } from './internationalization-adapter';
import { InternationalizationService } from './internationalization.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: InternationalizationAdapter,
      useClass: InternationalizationService
    }
  ]
})
export class InternationalizationModule {}
