import { Action } from '../model';
import { asyncCreator } from '../../shared/actions/asyncCreator';
import { getCategories as request } from '../../../../requests/getCategories';

/* -----------------------------------
 *
 * Categories
 *
 * -------------------------------- */

export function getCategories() {
   const props = {
      action: Action,
   };

   return asyncCreator(request)(props);
}
