import {
   createStore,
   applyMiddleware,
   compose,
   Middleware,
   Reducer,
} from 'redux';
import thunk from 'redux-thunk';
import { camelCaseProps } from '../utility';

/* -----------------------------------
 *
 * Configure
 *
 * -------------------------------- */

function configureStore(reducer: Reducer, state?: any) {
   const middlewares: Middleware[] = [thunk];

   const finalCreateStore: any = compose(
      applyMiddleware(...middlewares),
      (f: any) => f
   )(createStore);

   return finalCreateStore(reducer, camelCaseProps(state));
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { configureStore };
