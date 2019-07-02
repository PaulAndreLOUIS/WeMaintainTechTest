import { Action } from '@ngrx/store';
import { User, ViewSize } from 'src/app/models';
import {
  ViewSizeActions,
  ChangeViewSizeActionType,
  ChangeViewSizeAction
} from '../actions/view-size.action';

export function reducer(
  state: ViewSize = ViewSize.Week,
  action: ViewSizeActions
) {
  switch (action.type) {
    case ChangeViewSizeActionType:
      return (action as ChangeViewSizeAction).payload;
    default:
      return state;
  }
}
