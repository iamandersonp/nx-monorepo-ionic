import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerAdapter } from './logger-adapter';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: LoggerAdapter, useClass: LoggerService }]
})
export class LoggerModule {}
