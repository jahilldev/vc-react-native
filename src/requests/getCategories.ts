import { asyncRequest } from '../utility';
import { __API__, __KEY__ } from '../config';

/* -----------------------------------
 *
 * Categories
 *
 * -------------------------------- */

const getCategories = async () => {
   const url = `${__API__}categories/`;

   const result = await asyncRequest(url, {
      headers: {
         'X-ApiKey': __KEY__,
      },
   });

   return result;
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { getCategories };
