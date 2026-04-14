import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import {
  IonHeader,
  IonBackButton,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonMenuButton
} from '@ionic/angular/standalone';

/**
 * Component to display the header with back button and title
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'iamanderson-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonToolbar,
    IonBackButton,
    IonHeader,
    IonTitle,
    IonMenuButton,
    NgIf
  ]
})
export class HeaderComponent {
  /**
   * Input title to set the display tittle
   *
   * @type {string}
   * @memberof HeaderComponent
   */
  private _tittle = '';

  /**
   * Getter for the tittle
   *
   * @readonly
   * @type {string}
   * @memberof HeaderComponent
   */
  public get tittle(): string {
    return this._tittle;
  }

  /**
   * Setter for the tittle
   *
   * @memberof HeaderComponent
   */
  @Input() public set tittle(value: string) {
    this._tittle = value;
  }

  /**
   * input to set the header background color with ionic colors
   *
   * @type {string}
   * @memberof HeaderComponent
   */
  @Input() color = '';

  /**
   * input to display/hide the back button
   *
   * @type {boolean}
   * @memberof HeaderComponent
   */
  @Input() back?: boolean;

  /**
   * input to set the back button text
   *
   * @memberof HeaderComponent
   */
  @Input() backText? = '';
}
