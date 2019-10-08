import update from 'immutability-helper';
import { IAction } from '../../../api/shared';
import { Action } from './model';
import { Offers } from '../../../api/offers/state';

/* -----------------------------------
 *
 * Popular
 *
 * -------------------------------- */

function popularOffersReducer(state = Offers, action: IAction) {
   switch (action.type) {
      case Action.Request: {
         return update(state, {
            loading: {
               $set: true,
            },
            error: {
               $set: false,
            },
         });
      }

      case Action.Success: {
         const { data } = action.payload;

         return update(state, {
            data: {
               $set: data.offers,
            },
            loading: {
               $set: false,
            },
            error: {
               $set: false,
            },
         });
      }

      case Action.Failure: {
         return update(state, {
            loading: {
               $set: false,
            },
            error: {
               $set: true,
            },
         });
      }

      default: {
         return state;
      }
   }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { popularOffersReducer };
