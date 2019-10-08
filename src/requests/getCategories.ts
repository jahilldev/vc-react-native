import { asyncRequest } from '../utility';
import { __API__ } from '../config';

/* -----------------------------------
 *
 * Categories
 *
 * -------------------------------- */

const getCategories = (apiKey: string) => {
   return async () => {
      const url = `${__API__}categories/`;

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

export { getCategories };
