import { IResource } from './resource';

/* -----------------------------------
 *
 * IResources
 *
 * -------------------------------- */

export interface IResources {
   loading: boolean;
   data: {
      [index: string]: IResource;
   };
   error: boolean;
   message: string;
}

/* -----------------------------------
 *
 * Resources
 *
 * -------------------------------- */

export const Resources: IResources = {
   loading: false,
   data: {},
   error: false,
   message: null,
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IResource };
