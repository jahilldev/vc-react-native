/* -----------------------------------
 *
 * Action
 *
 * -------------------------------- */

export enum Action {
   Request = 'api/offers/request',
   Success = 'api/offers/success',
   Failure = 'api/offers/failure',
}

/* -----------------------------------
 *
 * Types
 *
 * -------------------------------- */

export enum Types {
   OnlineCode = 'OnlineCode',
   OnlineDeal = 'OnlineDeal',
   OnlineReward = 'OnlineReward',
   OnlineSale = 'OnlineSale',
   InStoreMobile = 'InStoreMobile',
   InStorePrintable = 'InStorePrintable',
   Competition = 'Competition',
   Coupon = 'Coupon',
   InStoreDiningDeal = 'InStoreDiningDeal',
}
