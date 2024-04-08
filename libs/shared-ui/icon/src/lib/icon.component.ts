import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { Component, Input } from '@angular/core';

/**
 * Dumb component to add accesibility tagns and colors for ion icons
 *
 * @export
 * @class IconComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'iamanderson-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class IconComponent {
  /**
   * input propiety to set the icon
   *
   * @type {string}
   * @memberof IconComponent
   */
  @Input() name = '';

  /**
   * input propiety to set the slot of the icon. Default value is 'start'
   *
   * @type {string}
   * @memberof IconComponent
   */
  @Input() slot: 'start' | 'end' | 'icon-only' = 'start';

  /**
   * input propiety to set size of the icon. Default value is 'mediun
   *
   * @type {('mediun' | 'large' | 'small')}
   * @memberof IconComponent
   */
  @Input() size: 'mediun' | 'large' | 'small' = 'mediun';
}
