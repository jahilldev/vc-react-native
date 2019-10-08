/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps<T> {
   [index: string]: any;
}

/* -----------------------------------
 *
 * Camel Case
 *
 * -------------------------------- */

const camelCaseProps = <T>(props: IProps<T>) => {
   let result: IProps<T>;
   let value;

   const keys = {
      old: '',
      new: '',
   };

   if (props instanceof Array) {
      return props.map(item => {
         if (typeof item === 'object') {
            item = camelCaseProps(item);
         }

         return item;
      });
   }

   result = {};

   for (keys.old in props) {
      if (props.hasOwnProperty(keys.old)) {
         keys.new = (
            keys.old.charAt(0).toLowerCase() + keys.old.slice(1) || keys.old
         ).toString();

         value = props[keys.old];

         if (
            value instanceof Array ||
            (value !== null && value.constructor === Object)
         ) {
            value = camelCaseProps(value);
         }

         result[keys.new] = value;
      }
   }

   return result;
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { camelCaseProps };
