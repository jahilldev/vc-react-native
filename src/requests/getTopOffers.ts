import { asyncRequest } from '../utility';
import { __API__, __KEY__ } from '../config';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IParams {
   countryCode: string;
   offerTypes: string;
}

/* -----------------------------------
 *
 * Top Offers
 *
 * -------------------------------- */

async function getTopOffers(params: IParams) {
   const { countryCode } = params;

   const url = `${__API__}offers/top/${countryCode}`;

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

export { getTopOffers };
