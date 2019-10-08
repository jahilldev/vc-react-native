import update from 'immutability-helper';
import { IAction } from '../shared';
import { Action } from './model';
import { Account } from './state';

/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

function accountReducer(state = Account, action: IAction) {
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

         data.meta.valid = true;

         return update(state, {
            data: {
               $set: data.meta,
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

export { accountReducer };
