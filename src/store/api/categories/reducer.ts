import update from 'immutability-helper';
import { IAction } from '../shared';
import { Action } from './model';
import { ICategory, Categories } from './state';
import * as utils from '../../../utility';

/* -----------------------------------
 *
 * Categories
 *
 * -------------------------------- */

function categoriesReducer(
   state = Categories,
   action: IAction
) {
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
               $set: utils.hashMap(
                  data.categories,
                  (item: ICategory) => item.id
               ),
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

export { categoriesReducer };
