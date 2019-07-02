import { Action } from '@ngrx/store';

export const ChangeDateActionType = 'ChangeDateAction';

export class ChangeDateAction implements Action {
  type = ChangeDateActionType;
  payload: Date;
}

export type CurrentDateActions = ChangeDateAction;
