import { Action } from '@ngrx/store';
import { ViewSize } from 'src/app/models';

export const ChangeViewSizeActionType = 'ChangeViewSizeAction';

export class ChangeViewSizeAction implements Action {
  type = ChangeViewSizeActionType;
  payload: ViewSize;
}

export type ViewSizeActions = ChangeViewSizeAction;
