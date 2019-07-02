import { Action } from '@ngrx/store';

export const ChangeUserActionType = 'ChangeUserActionType';

export class ChangeUserAction implements Action {
  type = ChangeUserActionType;
  payload: string;
}

export type CurrentUserActions = ChangeUserAction;
