import { asyncRequest } from '../utility';
import { __API__, __KEY__ } from '../config';

/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

async function getAccount() {
   const url = `${__API__}widget/authorise`;

   const result = await asyncRequest(url, {
      headers: {
         'X-ApiKey': __KEY__,
      },
   });

   return result;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { getAccount };
