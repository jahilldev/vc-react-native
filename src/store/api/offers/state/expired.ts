/* -----------------------------------
 *
 * IExpired
 *
 * -------------------------------- */

export interface IExpired {
   expiryDateTime: string;
   offerId: number;
   offerTitle: string;
   merchantId: number;
   merchantLogoUrl: string;
   merchantName: string;
   merchantSlug: string;
   isUnique: boolean;
   code: string;
}
