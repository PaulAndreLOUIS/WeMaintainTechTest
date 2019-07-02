import { Action } from '@ngrx/store';
import { Event } from 'src/app/models';

export const AddOrUpdateEventActionType = 'AddOrUpdateEventActionType';
export const UpdateEventActionType = 'UpdateEventActionType';
export const DeleteEventActionType = 'DeleteEventActionType';

export class AddOrUpdateEventAction implements Action {
  type = AddOrUpdateEventActionType;
  payload: Event;
}

export class DeleteEventAction implements Action {
  type = DeleteEventActionType;
  payload: string;
}

export type AllEventsActions = AddOrUpdateEventAction | DeleteEventAction;
