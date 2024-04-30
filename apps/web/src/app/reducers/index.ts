import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../enviroments/environment';

import { routerReducer } from '@ngrx/router-store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

/**
 * Logger for the store
 *
 * @export
 * @param {ActionReducer<AppState>} reducer - The reducer
 * @return {*}  {ActionReducer<AppState>}
 */
export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
