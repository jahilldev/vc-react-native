import { combineReducers } from 'redux';
import { resourcesReducer } from './resources';
import { categoriesReducer } from './categories';

/* -----------------------------------
 *
 * Reducer
 *
 * -------------------------------- */

const apiReducer = combineReducers({
   resources: resourcesReducer,
   categories: categoriesReducer,
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { apiReducer };
