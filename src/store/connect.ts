import { AnyComponent } from 'preact';
import {
   connect as originalConnect,
   MapDispatchToPropsParam,
   MapStateToPropsParam,
   MergeProps,
   Options,
} from 'preact-redux';

export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> = <
   TComponent extends AnyComponent<TInjectedProps & TNeedsProps>
>(
   component: TComponent
) => TComponent;

interface IConnectDecorator {
   <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
      mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps>,
      mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
   ): InferableComponentEnhancerWithProps<
      TStateProps & TDispatchProps,
      TOwnProps
   >;

   <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}>(
      mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps>,
      mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
      mergeProps?: MergeProps<
         TStateProps,
         TDispatchProps,
         TOwnProps,
         TMergedProps
      >,
      options?: Options<TStateProps, TOwnProps, TMergedProps>
   ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
}

export const connect = originalConnect as IConnectDecorator;
