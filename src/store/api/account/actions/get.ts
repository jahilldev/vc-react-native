import { Action } from '../model';
import { asyncCreator } from '../../shared/actions';
import { getAccount as request } from '../../../../requests/getAccount';

/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export function getAccount(): any {
   const props = {
      action: Action,
   };

   return asyncCreator(request)(props);
}
