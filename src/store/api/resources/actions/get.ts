import { Action } from '../model';
import { asyncCreator } from '../../shared/actions/asyncCreator';
import {
   IParams,
   getResources as request,
} from '../../../../requests/getResources';

/* -----------------------------------
 *
 * IParams
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

export function getResources(
   apiKey: string,
   params: IParams
): any {
   const props = {
      action: Action,
      params,
      persist: {
         expire: 3600,
      },
   };

   return asyncCreator(request(apiKey))(props);
}
