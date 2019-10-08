import { asyncRequest } from '../utility';
import { __API__, __KEY__ } from '../config';

/* -----------------------------------
 *
 * IParam
 *
 * -------------------------------- */

export interface IParams {
   countryCode: string;
   offerTypes: string[];
   domainIds?: number;
   categoryIds?: number[];
   pageSize?: number;
   pageNumber?: number;
   radius?: number;
   onlyShowExclusiveOffers?: boolean;
   hideFeaturedOffers?: boolean;
   includeFinancialTermsOffers?: boolean;
}

/* -----------------------------------
 *
 * Popular Offers
 *
 * -------------------------------- */

const getPopularOffers = async (params: IParams) => {
   const { countryCode } = params;

   const url = `${__API__}offers/popular/${countryCode}`;

   const result = await asyncRequest(url, {
      query: params,
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

export { getPopularOffers };
