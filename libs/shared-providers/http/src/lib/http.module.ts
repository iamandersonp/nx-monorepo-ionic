import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpAdapter } from './http-adapter';
import { HttpService } from './http.service';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: HttpAdapter, useValue: HttpService }]
})
export class HttpModule {}
