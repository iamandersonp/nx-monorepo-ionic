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
import { IntrefaceMenu, TipoLink } from '../../components/menu/interface-menu';
import { MenuComponent } from '../../components/menu/menu.component';

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
    component.externalLinks = [];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items', () => {
    const menuItems: IntrefaceMenu[] = [
      {
        title: 'menu.dashboard',
        url: ['/'],
        icon: 'home'
      },
      {
        title: 'menu.search',
        url: ['/search'],
        icon: 'search'
      }
    ];

    component.menus = menuItems;
    fixture.detectChanges();
    expect(component.menus).toEqual(menuItems);
  });

  it('should render external links', () => {
    const externalLinks: IntrefaceMenu[] = [
      {
        title: 'external link',
        url: ['https://www.example.com'],
        icon: 'external-link',
        target: '_blank'
      }
    ];

    component.externalLinks = externalLinks;
    fixture.detectChanges();
    expect(component.externalLinks).toEqual(externalLinks);
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