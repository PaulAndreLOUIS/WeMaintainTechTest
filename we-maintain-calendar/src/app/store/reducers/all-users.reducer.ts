import { Action } from '@ngrx/store';
import { User } from 'src/app/models';

export function reducer(
  state: User[] = [
    { name: 'Joe', id: 'Joe' },
    { name: 'William', id: 'William' },
    { name: 'Jack', id: 'Jack' },
    { name: 'Averell', id: 'Averell' }
  ],
  action: Action
) {
  return state;
}
