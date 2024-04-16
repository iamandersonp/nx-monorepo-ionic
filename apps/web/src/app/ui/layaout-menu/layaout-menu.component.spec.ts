import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  IonApp,
  IonSplitPane,
  IonContent,
  IonMenu,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateModule } from '@ngx-translate/core';

import { InternationalizationAdapter } from '@iamanderson/shared-providers/internationalization';
import { LayaoutMenuComponent } from './layaout-menu.component';
import { IntrefaceMenu, TipoLink } from '../menu/interface-menu';
import { MenuComponent } from '../menu/menu.component';

/**
 *  Mock for L18nService
 */
export const l18nSrvMock = {
  useLanguage: jest.fn(),
  language: 'en',
  languageCode: 'en',
  languages: [],
  _language: jest.fn(),
  checDefaultLanguage: jest.fn(),
  getinstant: jest.fn()
};

describe('LayaoutMenuComponent', () => {
  let component: LayaoutMenuComponent;
  let fixture: ComponentFixture<LayaoutMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterLink,
        IonContent,
        IonRouterOutlet,
        IonMenu,
        IonSplitPane,
        IonApp,
        MenuComponent
      ],
      providers: [
        {
          provide: InternationalizationAdapter,
          useValue: l18nSrvMock
        },
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
    fixture = TestBed.createComponent(LayaoutMenuComponent);
    component = fixture.componentInstance;
    component.menus = [];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const menuItems: IntrefaceMenu[] = [
      {
        id: 1,
        title: 'menu.dashboard',
        url: ['/'],
        icon: 'home'
      },
      {
        id: 2,
        title: 'menu.search',
        url: ['/search'],
        icon: 'search'
      }
    ];

    component.menus = menuItems;
    fixture.detectChanges();
    expect(component.menus).toEqual(menuItems);
  });

  it('should have tipoLink property', () => {
    expect(component.tipoLink).toBeTruthy();
    expect(component.tipoLink).toEqual(TipoLink);
  });

  it('should have l18nSrv property', () => {
    expect(component.l18nSrv).toBeTruthy();
    expect(component.l18nSrv).toEqual(l18nSrvMock);
  });

  it('should call onVisible(', () => {
    const e = { detail: { visible: true } };

    const spyonVisible = jest.spyOn(component, 'onVisible');
    const spyVisible = jest.spyOn(component, 'visible', 'set');
    component.onVisible(e);
    expect(spyonVisible).toHaveBeenCalled();
    expect(spyVisible).toHaveBeenCalledWith(true);
  });
});
