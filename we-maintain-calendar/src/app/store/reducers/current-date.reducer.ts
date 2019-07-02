import {
  CurrentDateActions,
  ChangeDateAction,
  ChangeDateActionType
} from '../actions/current-date.action';

const today = new Date();
today.setHours(0, 0, 0, 0);

export function reducer(state: Date = today, action: CurrentDateActions) {
  switch (action.type) {
    case ChangeDateActionType:
      return (action as ChangeDateAction).payload;
    default:
      return state;
  }
}
