import { IData } from './data';

/* -----------------------------------
 *
 * IAccount
 *
 * -------------------------------- */

export interface IAccount {
   loading: boolean;
   data: IData;
   error: boolean;
}

/* -----------------------------------
 *
 * Account
 *
 * -------------------------------- */

export const Account: IAccount = {
   loading: false,
   data: {
      valid: false,
      brandName: null,
      logo: null,
      domainId: null,
      countryCode: null,
      categories: [],
      webDomain: null,
      analyticsKey: null,
      algoliaApiId: null,
      algoliaApiIndex: null,
      algoliaApiKey: null,
      theme: 'default',
      defaultCultureCode: null,
   },
   error: null,
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export * from './category';
export * from './data';
