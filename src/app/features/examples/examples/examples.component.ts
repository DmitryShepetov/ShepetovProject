import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'sp-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'sp.examples.menu.todos' },
    { link: 'stock-market', label: 'sp.examples.menu.stocks' },
    { link: 'theming', label: 'sp.examples.menu.theming' },
    { link: 'crud', label: 'sp.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'sp.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'sp.examples.menu.form' },
    { link: 'notifications', label: 'sp.examples.menu.notifications' },
    { link: 'elements', label: 'sp.examples.menu.elements' },
    { link: 'authenticated', label: 'sp.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
