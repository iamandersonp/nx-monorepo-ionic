import { Component } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';

/**
 * Dumb component to add accesibility tags to labels
 *
 * @export
 * @class LabelComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'iamanderson-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: [IonLabel]
})
export class LabelComponent {}
