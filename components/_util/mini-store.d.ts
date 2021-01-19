import React from 'react';
declare type Listener = () => void;
interface DefaultRootState {
}
export declare type Store<S = DefaultRootState> = {
    getState: () => S;
    setState: (partialState: Partial<S>) => void;
    subscribe: (fn: Listener) => () => void;
};
declare type TMapStateToProps<S = DefaultRootState> = (state: S) => Partial<S> | null;
declare type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps ? InjectedProps[P] extends DecorationTargetProps[P] ? DecorationTargetProps[P] : InjectedProps[P] : DecorationTargetProps[P];
};
export declare const Provider: React.FC<{
    store: Store;
}>;
export declare function connect<TStateProps = {}, TOwnProps = {}>(mapStateToProps?: TMapStateToProps): <C extends React.FunctionComponent<Matching<TStateProps, TOwnProps>>>(WrapComponent: C) => (props: Matching<TStateProps, TOwnProps>) => JSX.Element;
export declare function createStore<S>(initialStore?: S): Store<S>;
export {};
