import { asyncRequest } from '../utility';
import { __API__ } from '../config';

/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

const getAccount = (apiKey: string) => {
   return async () => {
      const url = `${__API__}widget/authorise`;

      const result = await asyncRequest(url, {
         headers: {
            'X-ApiKey': apiKey,
         },
      });

      return result;
   };
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { getAccount };
