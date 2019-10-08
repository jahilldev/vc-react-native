import { Action } from '../model';
import { asyncCreator } from '../../shared/actions';
import { getAccount as request } from '../../../../requests/getAccount';

/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export function getAccount(apiKey: string): any {
   const props = {
      action: Action,
      persist: {
         expire: 3600,
      },
   };

   return asyncCreator(request(apiKey))(props);
}
