import { ICategory } from './category';

/* -----------------------------------
 *
 * IData
 *
 * -------------------------------- */

export interface IData {
   valid: boolean;
   brandName: string;
   logo: string;
   domainId: number;
   countryCode: string;
   categories: ICategory[];
   webDomain: string;
   analyticsKey: string;
   algoliaApiId: string;
   algoliaApiIndex: string;
   algoliaApiKey: string;
   theme: string;
   defaultCultureCode: string;
}
