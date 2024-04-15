import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  IonItem,
  IonList,
  IonTitle,
  IonListHeader,
  IonToolbar,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

import { MenuComponent } from './menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { InternationalizationAdapter } from '@iamanderson/shared-providers/internationalization';
import { TipoLink } from './interface-menu';

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

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        IonItem,
        IonList,
        IonTitle,
        IonListHeader,
        IonToolbar,
        IonButtons,
        IonButton
      ],
      providers: [
        {
          provide: InternationalizationAdapter,
          useValue: l18nSrvMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Menu that contain 1 item', () => {
    component.appPages = [
      {
        id: 1,
        title: 'menu.dashboard',
        url: ['/'],
        icon: 'home',
        tipo: TipoLink.INTERNAL
      }
    ];
    expect(component.appPages.length).toBe(1);
  });

  it('should call closeMenu', () => {
    const closeMenu = jest.spyOn(component, 'closeMenu');
    component.closeMenu();
    expect(closeMenu).toHaveBeenCalled();
  });

  it('should call debug getter', () => {
    expect(component.debug).toBeFalsy();
  });

  it('should call debug setter', () => {
    component.debug = true;
    expect(component.debug).toBeTruthy();
  });

  describe('toggleDebug', () => {
    it('should call toggleDebug and set countClicks = 2', () => {
      const toggleDebug = jest.spyOn(component, 'toggleDebug');
      component.toggleDebug();
      expect(toggleDebug).toHaveBeenCalled();
      expect(component.countClicks).toBe(2);
    });
    it('should call toggleDebug 5 times and set debug true', () => {
      const toggleDebug = jest.spyOn(component, 'toggleDebug');
      component.toggleDebug();
      component.toggleDebug();
      component.toggleDebug();
      component.toggleDebug();
      component.toggleDebug();
      expect(toggleDebug).toHaveBeenCalled();
      expect(component.countClicks).toBe(0);
      expect(component.debug).toBeTruthy();
    });
  });
});
