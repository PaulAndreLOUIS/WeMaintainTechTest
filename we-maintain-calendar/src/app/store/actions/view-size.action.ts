import { Action } from '@ngrx/store';
import { ViewSize } from 'src/app/models';

export const ChangeViewSizeActionType = 'ChangeViewSizeAction';

export class ChangeViewSizeAction implements Action {
  type = ChangeViewSizeActionType;
  payload: ViewSize;
  constructor(viewSize: ViewSize) {
    this.payload = viewSize;
  }
}

export type ViewSizeActions = ChangeViewSizeAction;
