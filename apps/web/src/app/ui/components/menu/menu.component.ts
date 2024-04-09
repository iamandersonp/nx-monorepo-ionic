import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonMenuToggle, MenuController } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

import { IntrefaceMenu, TipoLink } from './interface-menu';
import { LabelComponent } from '@iamanderson/shared-ui/label';
import { IconComponent } from '@iamanderson/shared-ui/icon';
import { InternationalizationAdapter } from '@iamanderson/shared-providers/internationalization';
import {
  IonList,
  IonTitle,
  IonListHeader,
  IonToolbar,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';
import { TranslateMessagePipe } from '../../utils/translate-message.pipe';

/**
 * Handle the left menu on the sidebar
 *
 * @export
 * @class MenuComponent
 */
@Component({
  selector: 'iamanderson-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonToolbar,
    IonMenuToggle,
    IonListHeader,
    IonTitle,
    IonList,
    CommonModule,
    TranslateModule,
    TranslateMessagePipe,
    RouterModule,
    LabelComponent,
    IconComponent,
    NgIf
  ]
})
export class MenuComponent {
  /**
   * inject MenuController
   *
   * @private
   * @type {MenuController}
   * @memberof MenuComponent
   */
  private menu: MenuController = inject(MenuController);

  /**
   * inject InternationalizationAdapter
   *
   * @private
   * @type {InternationalizationAdapter}
   * @memberof MenuComponent
   */
  private _l18nSrv: InternationalizationAdapter = inject(
    InternationalizationAdapter
  );

  /**
   * getter for l18nSrv
   *
   * @readonly
   * @type {InternationalizationAdapter}
   * @memberof MenuComponent
   */
  public get l18nSrv(): InternationalizationAdapter {
    return this._l18nSrv;
  }

  /**
   * input propiety to display/hide the bank logo
   *
   * @type {boolean}
   * @memberof MenuComponent
   */
  @Input() displayLogo? = false;

  /**
   * input propiety with the list of pages to display
   *
   * @type {IntrefaceMenu[]}
   * @memberof MenuComponent
   */
  @Input() appPages: IntrefaceMenu[] = [];

  /**
   * input propiety to set if the links are internal or external
   *
   * @type {TipoLink}
   * @memberof MenuComponent
   */
  @Input() tipoMenu: TipoLink = TipoLink.EXTERNAL;

  /**
   * input to hide the close button when the spin panel is open
   *
   * @type {boolean}
   * @memberof MenuComponent
   */
  @Input() visible = false;

  /**
   * emun used to set the external/internal propiety
   *
   * @type {typeof TipoLink}
   * @memberof MenuComponent
   */
  public tipoLink: typeof TipoLink = TipoLink;

  /**
   * if the debug mode is active
   *
   * @private
   * @type {boolean}
   * @memberof MenuComponent
   */
  private _debug = false;

  /**
   * count the number of clicks on the logo to activate the debug mode
   *
   * @private
   * @type {number}
   * @memberof MenuComponent
   */
  private _countClicks = 1;

  /**
   * getter for debug
   *
   * @type {boolean}
   * @memberof MenuComponent
   */
  public get debug(): boolean {
    return this._debug;
  }

  /**
   * setter for debug
   *
   * @memberof MenuComponent
   */
  public set debug(value: boolean) {
    this._debug = value;
  }

  /**
   * getter for countClicks
   *
   * @type {number}
   * @memberof MenuComponent
   */
  public get countClicks(): number {
    return this._countClicks;
  }

  /**
   * setter for countClicks
   *
   * @memberof MenuComponent
   */
  public set countClicks(value: number) {
    this._countClicks = value;
  }

  /**
   * @ignore
   *
   * @memberof MenuComponent
   */
  public async closeMenu() {
    await this.menu.close();
  }

  /**
   * Toggle the debug mode when the logo is clicked 5 times
   *
   * @memberof MenuComponent
   */
  toggleDebug() {
    if (!this.debug && this.countClicks < 5) {
      this.countClicks++;
    } else {
      this.countClicks = 0;
      this.debug = !this.debug;
    }
  }
}
