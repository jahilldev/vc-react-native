import { combineReducers } from 'redux';
import { resourcesReducer } from './resources';
import { accountReducer } from './account';
import { categoriesReducer } from './categories';

/* -----------------------------------
 *
 * Reducer
 *
 * -------------------------------- */

const apiReducer = combineReducers({
   resources: resourcesReducer,
   categories: categoriesReducer,
   account: accountReducer,
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { apiReducer };
