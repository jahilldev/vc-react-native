import {
   IProps as IAsync,
   asyncCreator,
} from '../../shared/actions/asyncCreator';
import {
   IParams,
   getPopularOffers as request,
} from '../../../../requests/getPopularOffers';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps extends IAsync {
   params: IParams;
}

/* -----------------------------------
 *
 * Popular Offers
 *
 * -------------------------------- */

export function getPopularOffers(props: IProps) {
   return asyncCreator(request)(props);
}
