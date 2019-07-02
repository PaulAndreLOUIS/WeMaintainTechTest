import {
  AllEventsActions,
  DeleteEventActionType,
  AddOrUpdateEventAction,
  AddOrUpdateEventActionType,
  DeleteEventAction
} from '../actions/all-events.action';
import { Event } from 'src/app/models';

const today = new Date();
today.setHours(0, 0, 0, 0);
const yesterday = new Date();
yesterday.setHours(0, 0, 0, 0);
yesterday.setDate(today.getDate() - 1);
const inTwoDays = new Date();
inTwoDays.setHours(0, 0, 0, 0);
inTwoDays.setDate(today.getDate() + 2);

const events = {
  oflayuiserg: {
    id: 'oflayuiserg',
    date: today,
    startTime: 8,
    duration: 5,
    name: 'Chase Rantanplan',
    attendees: ['Joe', 'Jack'],
    description: 'After the dog !'
  },
  kljzbhsxdg: {
    id: 'kljzbhsxdg',
    date: today,
    startTime: 8,
    duration: 5,
    name: 'Eat !',
    attendees: ['Averell'],
    description: 'Averell prefers to eat...'
  },
  ksndjgrth: {
    id: 'ksndjgrth',
    date: yesterday,
    startTime: 8,
    duration: 5,
    name: 'Eat !',
    attendees: ['Averell'],
    description: 'Averell prefers to eat...'
  },
  agser: {
    id: 'agser',
    date: inTwoDays,
    startTime: 8,
    duration: 5,
    name: 'Eat !',
    attendees: ['Averell'],
    description: 'Averell prefers to eat...'
  },
  sdrh: {
    id: 'sdrh',
    date: inTwoDays,
    startTime: 14,
    duration: 3,
    name: 'Robe a bank',
    attendees: ['Joe', 'William', 'Jack', 'Averell'],
    description: "Let's get rich !"
  },
  oiunsdrth: {
    id: 'oiunsdrth',
    date: today,
    startTime: 14,
    duration: 3,
    name: 'Be smart',
    attendees: ['Joe'],
    description: 'And plan the best moves ever'
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
      delete newState[(action as DeleteEventAction).payload];
      break;
    default:
      break;
  }
  return newState;
}
