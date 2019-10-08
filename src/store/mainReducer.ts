import { combineReducers, Dispatch } from 'redux';
import { IResources } from './api/resources';
import { ICategories } from './api/categories';
import { IAccount } from './api/account';
import { apiReducer } from './api/apiReducer';
import { IViews, viewsReducer } from './views/viewsReducer';

/* -----------------------------------
 *
 * IStore
 *
 * -------------------------------- */

interface IStore {
   dispatch?: Dispatch;
   views: IViews;
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
   api: apiReducer,
   views: viewsReducer,
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IStore, mainReducer };
