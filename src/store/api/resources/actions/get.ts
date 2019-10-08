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

export function getResources(params: IParams): any {
   const props = {
      action: Action,
      params,
   };

   return asyncCreator(request)(props);
}
