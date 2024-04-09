import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageAdapter } from './storage-adapter';
import { StorageService } from './storage.service';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: StorageAdapter, useClass: StorageService }]
})
export class StorageModule {}
