import { Action } from '../model';
import { asyncCreator } from '../../shared/actions/asyncCreator';
import { getCategories as request } from '../../../../requests/getCategories';

/* -----------------------------------
 *
 * Categories
 *
 * -------------------------------- */

export function getCategories(apiKey: string) {
   const props = {
      action: Action,
      persist: {
         expire: 3600,
      },
   };

   return asyncCreator(request(apiKey))(props);
}
