import React, { FunctionComponent } from 'react';
declare type Listener = () => void;
declare type DefaultRootState = {};
export declare type Store<S = DefaultRootState> = {
    getState: () => S;
    setState: (partialState: Partial<S>) => void;
    subscribe: (fn: Listener) => () => void;
};
declare type TMapStateToProps<TStateProps, State = DefaultRootState> = (state: State) => TStateProps;
export declare type ConnectedProps<TStateProps, State, TOwnProps> = TStateProps & {
    store: Store<State>;
} & TOwnProps;
export declare type ConnectedComponent<TStateProps, State, TOwnProps> = FunctionComponent<ConnectedProps<TStateProps, State, TOwnProps>>;
export declare const Provider: React.FC<{
    store: Store;
}>;
export declare function connect<TStateProps = {}, State = DefaultRootState, TOwnProps = {}>(mapStateToProps?: TMapStateToProps<TStateProps, State>): <C extends React.FunctionComponent<TOwnProps>>(WrapComponent: C) => React.FunctionComponent<ConnectedProps<TStateProps, State, TOwnProps>>;
export declare function createStore<S>(initialStore?: S): Store<S>;
export {};
