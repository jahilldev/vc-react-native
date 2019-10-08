import { IMedia } from './media';
import { ITerms } from './terms';
import { IStats } from './stats';

/* -----------------------------------
 *
 * IOffer
 *
 * -------------------------------- */

export interface IOffer {
   offerId: number;
   offerTitle: string;
   offerDescription: string;
   offerType: string;
   offerMedia: IMedia[];
   offerUrl: string;
   calloutValue: string;
   premiumBgColour: string;
   isExclusive: boolean;
   isPremiumOffer: boolean;
   isPromotedOffer: boolean;
   isCommunityCode: boolean;
   isRedeemed: boolean;
   isFeatured: boolean;
   isSaved: boolean;
   isSecretCode: boolean;
   isStaffPick: boolean;
   isValidToday: boolean;
   loyaltyTier: string;
   isHeadlineOffer: boolean;
   isLimitedGlobally: boolean;
   isLimitedPerUser: boolean;
   isNoCodeRedemptionType: boolean;
   numberUsed: number;
   categories: number[];
   countDownType: string;
   currencySign: string;
   discountType: string;
   discountValue: number;
   expiryDateTime: string;
   globalRedemptionsAllowed: number;
   globalRedemptionsRemaining: number;
   redemptionTypes: string[];
   startDateTime: string;
   staticCode: string;
   moreMerchantOffers: Array<Partial<IOffer>>;
   verificationState: string;
   websiteName: string;
   websiteUrl: string;
   offerStatistics: IStats;
   branch: {
      name: string;
   };
   merchant: {
      merchantId: number;
      merchantName: string;
      merchantSlug: string;
      merchantMedia: IMedia[];
   };
   termsAndConditions: ITerms;
}
