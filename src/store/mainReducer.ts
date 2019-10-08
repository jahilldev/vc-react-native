import { combineReducers, Dispatch } from 'redux';
import { resourcesReducer, IResources } from './api/resources';
import { accountReducer, IAccount } from './api/account';
import {
   categoriesReducer,
   ICategories,
} from './api/categories';

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
      account: IAccount;
   };
}

/* -----------------------------------
 *
 * Reducer
 *
 * -------------------------------- */

const mainReducer = combineReducers({
   api: combineReducers({
      resources: resourcesReducer,
      categories: categoriesReducer,
      account: accountReducer,
   }),
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IStore, mainReducer };
