import { Component, Input, inject } from '@angular/core';
import { IntrefaceMenu, TipoLink } from '../../components/menu/interface-menu';
import { InternationalizationAdapter } from '@iamanderson/shared-providers/internationalization';
import { DeviceDetectorService } from 'ngx-device-detector';
import {
  IonApp,
  IonSplitPane,
  IonContent,
  IonMenu,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import { MenuComponent } from '../../components/menu/menu.component';
import { NgClass } from '@angular/common';

/**
 * Component to handle the main router-outlet of the app with side menu
 *
 * @export
 * @class LayaoutMenuComponent
 */
@Component({
  selector: 'iamanderson-layaout-menu',
  templateUrl: './layaout-menu.component.html',
  styleUrls: ['./layaout-menu.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    IonContent,
    IonRouterOutlet,
    IonMenu,
    IonSplitPane,
    IonApp,
    MenuComponent
  ]
})
export class LayaoutMenuComponent {
  /**
   * Inject the InternationalizationAdapter
   *
   * @private
   * @type {InternationalizationAdapter}
   * @memberof LayaoutMenuComponent
   */
  private _l18nSrv: InternationalizationAdapter = inject(
    InternationalizationAdapter
  );

  /**
   * Inject the DeviceDetectorService
   *
   * @private
   * @type {DeviceDetectorService}
   * @memberof LayaoutMenuComponent
   */
  private _detector: DeviceDetectorService = inject(DeviceDetectorService);

  /**
   * getter for DeviceDetectorService
   *
   * @readonly
   * @type {DeviceDetectorService}
   * @memberof LayaoutMenuComponent
   */
  public get detector(): DeviceDetectorService {
    return this._detector;
  }
  /**
   * used to check if the menu item is internal/external
   *
   * @type {typeof TipoLink}
   * @memberof LayaoutMenuComponent
   */
  public tipoLink: typeof TipoLink = TipoLink;

  /**
   * Input for the menus
   *
   * @type {IntrefaceMenu[]}
   * @memberof LayaoutMenuComponent
   */
  @Input() menus: IntrefaceMenu[] = [];

  /**
   * Array of the external links
   *
   * @type {IntrefaceMenu[]}
   * @memberof LayaoutMenuComponent
   */
  public externalLinks: IntrefaceMenu[] = [];
  /**
   * store the visible status of the spin pane
   *
   * @type {boolean}
   * @memberof LayaoutMenuComponent
   */
  private _visible = false;

  /**
   * getter for visible
   *
   * @type {boolean}
   * @memberof LayaoutMenuComponent
   */
  public get visible(): boolean {
    return this._visible;
  }

  /**
   * setter for visible
   *
   * @memberof LayaoutMenuComponent
   */
  public set visible(value: boolean) {
    this._visible = value;
  }

  /**
   * initialice the array of languages with all the avaibles languages configured on enviroments
   *
   * @readonly
   * @type {InternationalizationAdapter}
   * @memberof LayaoutMenuComponent
   */
  get l18nSrv(): InternationalizationAdapter {
    return this._l18nSrv;
  }

  /**
   * getter for DeviceDetectorService
   *
   * @readonly
   * @type {DeviceDetectorService}
   * @memberof LayaoutMenuComponent
   */
  /**
   * Trigged when the spin pane is open/closed
   *
   * @param {*} $event
   * @memberof LayaoutMenuComponent
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onVisible($event: any) {
    this.visible = $event.detail.visible;
  }
}
