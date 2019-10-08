import {
   IProps as IAsync,
   asyncCreator,
} from '../../shared/actions/asyncCreator';
import {
   IParams,
   getTopOffers as request,
} from '../../../../requests/getTopOffers';

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
 * Top Offers
 *
 * -------------------------------- */

export function getTopOffers(props: IProps) {
   return asyncCreator(request)(props);
}
