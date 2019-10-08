import { combineReducers } from 'redux';
import { popularOffersReducer } from './popularOffers';
import { IOffers } from '../../api/offers';

/* -----------------------------------
 *
 * IHome
 *
 * -------------------------------- */

interface IHome {
   popularOffers: IOffers;
}

/* -----------------------------------
 *
 * Reducer
 *
 * -------------------------------- */

const homeReducer = combineReducers({
   popularOffers: popularOffersReducer,
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IHome, homeReducer };
