import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

import { LayaoutNoMenuComponent } from './layaout-no-menu.component';

describe('LayaoutNoMenuComponent', () => {
  let component: LayaoutNoMenuComponent;
  let fixture: ComponentFixture<LayaoutNoMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonRouterOutlet],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{ id: 1 }])
          }
        },
        {
          provide: DeviceDetectorService,
          useValue: { isDesktop: jest.fn() }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LayaoutNoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
