import {
  AllEventsActions,
  DeleteEventActionType,
  AddOrUpdateEventAction,
  AddOrUpdateEventActionType,
  DeleteEventAction
} from '../actions/all-events.action';
import { Event } from 'src/app/models';

const events = {};

export function reducer(
  state: { [id: string]: Event | undefined } = events,
  action: AllEventsActions
) {
  const newState = { ...state };

  switch (action.type) {
    case AddOrUpdateEventActionType:
      const event = (action as AddOrUpdateEventAction).payload;
      if (!event.id) {
        // creation
        // a UUID would be better but this should largly suffice for an exercise
        event.id =
          Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15);
      }
      newState[event.id] = event;
      break;
    case DeleteEventActionType:
      const deleteId = (action as DeleteEventAction).payload;
      newState[deleteId] = undefined;
      break;
    default:
      break;
  }
  return newState;
}
