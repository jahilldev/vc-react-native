import { connect, MapStateToPropsParam } from 'react-redux';
import { IStore } from '../../store';
import { LoadingScreen as BaseComponent } from './loadingScreen';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
   loading?: boolean;
}

/* -----------------------------------
 *
 * State
 *
 * -------------------------------- */

const mapStateToProps: MapStateToPropsParam<{}, IProps, any> = (
   state: IStore
) => ({
   loading:
      state.api.resources.loading &&
      state.api.account.loading &&
      state.api.categories.loading,
});

/* -----------------------------------
 *
 * Loading
 *
 * -------------------------------- */

const LoadingScreen = connect<IProps>(mapStateToProps)(
   BaseComponent
);

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { LoadingScreen };
