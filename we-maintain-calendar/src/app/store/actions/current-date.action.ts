import { Action } from '@ngrx/store';

export const ChangeDateActionType = 'ChangeDateAction';

export class ChangeDateAction implements Action {
  type = ChangeDateActionType;
  payload: Date;
  constructor(date: Date) {
    this.payload = date;
  }
}

export type CurrentDateActions = ChangeDateAction;
