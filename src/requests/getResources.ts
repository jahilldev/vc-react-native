import { asyncRequest } from '../utility';
import { __API__ } from '../config';

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

const getResources = (apiKey: string) => {
   return async (params: IParams) => {
      const { brandName, defaultCultureCode } = params;

      const url = `${__API__}widget/resources/${brandName}/${defaultCultureCode}`;

      const result = await asyncRequest(url, {
         query: params,
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

export { getResources };
