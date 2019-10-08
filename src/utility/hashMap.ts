/* -----------------------------------
 *
 * IResult
 *
 * -------------------------------- */

interface IResult<T> {
   [index: string]: T;
   [index: number]: T;
}

/* -----------------------------------
 *
 * Hash Map
 *
 * -------------------------------- */

function hashMap<T>(array: T[], key: (item: T) => any) {
   const result: IResult<T> = {};

   array.forEach((item: T) => (result[key(item)] = item));

   return result;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { hashMap };
