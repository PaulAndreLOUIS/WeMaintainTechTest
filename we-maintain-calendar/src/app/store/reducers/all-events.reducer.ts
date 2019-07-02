import {
  AllEventsActions,
  DeleteEventActionType,
  AddOrUpdateEventAction,
  AddOrUpdateEventActionType,
  DeleteEventAction
} from '../actions/all-events.action';
import { Event } from 'src/app/models';

const eightOClock = new Date();
eightOClock.setHours(8, 0, 0, 0);
const onePM = new Date();
onePM.setHours(13, 0, 0, 0);

const events = {
  oflayuiserg: {
    id: 'oflayuiserg',
    start: eightOClock,
    end: onePM,
    name: 'Chase Rantanplan',
    attendees: ['Joe', 'William', 'Jack'],
    description: 'After the dog !'
  },
  kljzbhsxdg: {
    id: 'kljzbhsxdg',
    start: eightOClock,
    end: onePM,
    name: 'Eat !',
    attendees: ['Averell'],
    description: 'Averell prefers to eat...'
  }
};

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
