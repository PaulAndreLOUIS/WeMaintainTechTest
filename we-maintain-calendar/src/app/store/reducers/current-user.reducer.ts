import {
  CurrentUserActions,
  ChangeUserAction,
  ChangeUserActionType
} from '../actions/current-user.action';

export function reducer(state: string = 'Joe', action: CurrentUserActions) {
  switch (action.type) {
    case ChangeUserActionType:
      return (action as ChangeUserAction).payload;
    default:
      return state;
  }
}
