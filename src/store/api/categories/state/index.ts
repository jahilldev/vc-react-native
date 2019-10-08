import { ICategory } from './category';

/* -----------------------------------
 *
 * ICategories
 *
 * -------------------------------- */

export interface ICategories {
   loading: boolean;
   data: {
      [index: number]: ICategory;
   };
   error: boolean;
   message: string;
}

/* -----------------------------------
 *
 * Categories
 *
 * -------------------------------- */

export const Categories: ICategories = {
   loading: false,
   data: null,
   error: false,
   message: null,
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export * from './category';
