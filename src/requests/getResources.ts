import { asyncRequest } from '../utility';
import { __API__, __KEY__ } from '../config';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IParams {
   brandName: string;
   defaultCultureCode: string;
}

/* -----------------------------------
 *
 * Resources
 *
 * -------------------------------- */

async function getResources(params: IParams) {
   const { brandName, defaultCultureCode } = params;

   const url = `${__API__}widget/resources/${brandName}/${defaultCultureCode}`;

   const result = await asyncRequest(url, {
      query: params,
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

export { getResources };
