/* -----------------------------------
 *
 * ICategory
 *
 * -------------------------------- */

export interface ICategory {
   id: number;
   name: string;
   parentId: number;
   description: string;
   forDisplay: boolean;
   isRoot: boolean;
   media: any;
}
