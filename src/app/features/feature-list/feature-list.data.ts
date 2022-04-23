import { environment as env } from '../../../environments/environment';

export interface Feature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation: string;
  medium?: string;
}

export const features: Feature[] = [
  {
    name: 'Angular',
    version: env.versions.angular,
    description: 'sp.features.angular',
    github: 'https://github.com/angular/angular',
    documentation: 'https://angular.io/docs/ts/latest/'
  },
  {
    name: 'Angular Material',
    version: env.versions.material,
    description: 'sp.features.angular-material',
    github: 'https://github.com/angular/material2/',
    documentation: 'https://material.angular.io/'
  },
  {
    name: 'Angular Cli',
    version: env.versions.angularCli,
    description: 'sp.features.angular-cli',
    github: 'https://github.com/angular/angular-cli',
    documentation: 'https://cli.angular.io/'
  },
  {
    name: 'NgRx',
    version: env.versions.ngrx,
    description: 'sp.features.ngrx',
    github: 'https://github.com/ngrx/platform',
    documentation: 'http://ngrx.github.io/',
  },
  {
    name: 'RxJS',
    version: env.versions.rxjs,
    description: 'sp.features.rxjs',
    github: 'https://github.com/ReactiveX/RxJS',
    documentation: 'http://reactivex.io/rxjs/',
  },
  {
    name: 'Bootstrap',
    version: env.versions.bootstrap,
    description: 'sp.features.bootstrap',
    github: 'https://github.com/twbs/bootstrap',
    documentation:
      'https://getbootstrap.com/docs/4.4/getting-started/introduction/',
  },
  {
    name: 'Typescript',
    version: env.versions.typescript,
    description: 'sp.features.typescript',
    github: 'https://github.com/Microsoft/TypeScript',
    documentation: 'https://www.typescriptlang.org/docs/home.html'
  },
  {
    name: 'I18n',
    version: env.versions.ngxtranslate,
    description: 'sp.features.ngxtranslate',
    github: 'https://github.com/ngx-translate/core',
    documentation: 'http://www.ngx-translate.com/'
  },
  {
    name: 'Font Awesome 6',
    version: env.versions.fontAwesome,
    github: 'https://github.com/FortAwesome/Font-Awesome',
    description: 'sp.features.fontawesome',
    documentation: 'https://fontawesome.com/icons'
  },
  {
    name: 'sp.features.themes.title',
    description: 'sp.features.themes.description',
    documentation: 'https://material.angular.io/guide/theming',
  },
  {
    name: 'sp.features.lazyloading.title',
    description: 'sp.features.lazyloading.description',
    documentation:
      'https://angular.io/guide/router#lazy-loading-route-configuration'
  },
];
