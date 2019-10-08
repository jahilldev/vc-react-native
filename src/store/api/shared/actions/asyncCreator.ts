import { Dispatch } from 'redux';
import { getRequest, getSuccess } from './';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

export interface IProps {
   action: any;
   params?: object;
}

/* -----------------------------------
 *
 * Async Creator
 *
 * -------------------------------- */

const asyncCreator = (request: any) => (props: IProps) => {
   const { action, params } = props;

   return async (dispatch: Dispatch) => {
      let result;

      dispatch(getRequest(action.Request));

      try {
         result = await request(params);
      } catch (err) {
         result = null;
      }

      if (!result) {
         dispatch(getRequest(action.Failure));

         return;
      }

      dispatch(
         getSuccess({
            type: action.Success,
            data: result,
         })
      );

      return result;
   };
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { asyncCreator };
