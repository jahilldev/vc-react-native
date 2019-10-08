import { camelCaseProps } from './camelCaseProps';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps extends RequestInit {
   query?: IParams;
   fullResult?: boolean;
}

/* -----------------------------------
 *
 * IParams
 *
 * -------------------------------- */

interface IParams {
   [index: string]: any;
}

/* -----------------------------------
 *
 * Request
 *
 * -------------------------------- */

async function asyncRequest(
   url: string,
   { query, fullResult = false, ...config }: IProps = {}
) {
   const endpoint = getQueryString(url, query);
   const response = await fetch(endpoint, config);

   if (!fullResult && !response.ok) {
      throw new Error(response.statusText);
   }

   const result = {
      ...response,
      json: await response.json(),
   };

   return fullResult ? result : camelCaseProps(result.json);
}

/* -----------------------------------
 *
 * Query String
 *
 * -------------------------------- */

function getQueryString(url: string, params: IParams = {}) {
   const encode = (value: string) => encodeURIComponent(value);

   const queryString = Object.keys(params)
      .map(key => `${encode(key)}=${encode(params[key])}`)
      .join('&');

   return url + (queryString && `?${queryString}`);
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { asyncRequest };
