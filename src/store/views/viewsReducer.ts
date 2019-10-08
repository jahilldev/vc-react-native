import { combineReducers } from 'redux';
import { IHome, homeReducer } from './home/homeReducer';

/* -----------------------------------
 *
 * IViews
 *
 * -------------------------------- */

interface IViews {
   home: IHome;
}

/* -----------------------------------
 *
 * Reducer
 *
 * -------------------------------- */

const viewsReducer = combineReducers({
   home: homeReducer,
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IViews, viewsReducer };
