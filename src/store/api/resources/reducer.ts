import update from 'immutability-helper';
import { IAction } from '../shared';
import { Action } from './model';
import { IResource, Resources } from './state';
import { hashMap } from '../../../utility';

/* -----------------------------------
 *
 * Resources
 *
 * -------------------------------- */

function resourcesReducer(state = Resources, action: IAction) {
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
               $set: hashMap(
                  data.resources,
                  (item: IResource) => item.key
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

export { resourcesReducer };
