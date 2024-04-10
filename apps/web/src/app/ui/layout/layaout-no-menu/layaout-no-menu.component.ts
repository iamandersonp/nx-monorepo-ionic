import { Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { NgClass } from '@angular/common';

/**
 * Component to handle the router-outlet of the aplication with no side menu
 *
 * @export
 * @class LayaoutNoMenuComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'iamanderson-layaout-no-menu',
  templateUrl: './layaout-no-menu.component.html',
  styleUrls: ['./layaout-no-menu.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, NgClass]
})
export class LayaoutNoMenuComponent {
  /**
   * Inject the DeviceDetectorService
   *
   * @private
   * @type {DeviceDetectorService}
   * @memberof LayaoutNoMenuComponent
   */
  private _detector: DeviceDetectorService = inject(DeviceDetectorService);

  /**
   * getter for DeviceDetectorService
   *
   * @readonly
   * @type {DeviceDetectorService}
   * @memberof LayaoutNoMenuComponent
   */
  public get detector(): DeviceDetectorService {
    return this._detector;
  }
}
