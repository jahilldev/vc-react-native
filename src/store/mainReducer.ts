import { combineReducers, Dispatch } from 'redux';
import { IResources } from './api/resources';
import { ICategories } from './api/categories';
import { apiReducer } from './api/apiReducer';

/* -----------------------------------
 *
 * IStore
 *
 * -------------------------------- */

interface IStore {
   dispatch?: Dispatch;
   api: {
      resources: IResources;
      categories: ICategories;
   };
}

/* -----------------------------------
 *
 * Reducer
 *
 * -------------------------------- */

const mainReducer = combineReducers({
   api: apiReducer,
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IStore, mainReducer };
