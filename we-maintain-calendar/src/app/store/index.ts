import { ActionReducerMap } from '@ngrx/store';
import { State } from './state';

import { reducer as allUsersReducer } from './reducers/all-users.reducer';
import { reducer as allEventsReducer } from './reducers/all-events.reducer';
import { reducer as currentDateReducer } from './reducers/current-date.reducer';
import { reducer as currentUserReducer } from './reducers/current-user.reducer';
import { reducer as viewSizeReducer } from './reducers/view-size.reducer';

export const reducers: ActionReducerMap<State> = {
  allEvents: allEventsReducer,
  allUsers: allUsersReducer,
  currentDate: currentDateReducer,
  currentUser: currentUserReducer,
  viewSize: viewSizeReducer
};

export const metaReducers = [];
