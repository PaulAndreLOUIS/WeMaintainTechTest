import { Action } from '@ngrx/store';

export const ChangeUserActionType = 'ChangeUserActionType';

export class ChangeUserAction implements Action {
  type = ChangeUserActionType;
  payload: string;
  constructor(user: string) {
    this.payload = user;
  }
}

export type CurrentUserActions = ChangeUserAction;
