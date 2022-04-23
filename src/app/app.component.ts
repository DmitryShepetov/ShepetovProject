import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  authLogin,
  authLogout,
  routeAnimations,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
} from './core/core.module';
import { LocalStorageService } from './core/local-storage/local-storage.service';
import { actionSettingsChangeAnimationsPageDisabled, actionSettingsChangeLanguage } from './core/settings/settings.actions';
import { AppState } from './core/core.state';
import browserDetect from 'browser-detect';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = environment.production;
  year = new Date().getFullYear();
  logo = 'assets/logo.png';
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he', 'ar', 'ru'];
  navigation = [
    { link: 'about', label: 'sp.menu.about' },
    { link: 'feature-list', label: 'sp.menu.features' },
    { link: 'examples', label: 'sp.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'sp.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean> | undefined;
  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService
  ) {}
  
  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browserDetect().name || '');
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
      if (AppComponent.isIEorEdgeOrSafari()) {
        this.store.dispatch(
          actionSettingsChangeAnimationsPageDisabled({
            pageAnimationsDisabled: true
          })
        );
      }
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

   onLogoutClick() {
     this.store.dispatch(authLogout());
   }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(actionSettingsChangeLanguage({ language: event.value })
    );
  }
}
