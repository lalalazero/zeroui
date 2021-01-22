import hoistNonReactStatics from 'hoist-non-react-statics'
import React, {
    ClassAttributes,
    ComponentClass,
    ComponentType,
    createContext,
    NamedExoticComponent,
} from 'react'

// =========== type definition begin ============
type Listener = () => void
// eslint-disable-next-line
interface DefaultRootState {}

export interface StoreProps<S = DefaultRootState> {
    store: Store<S>
}

export type Store<S = DefaultRootState> = {
    getState: () => S
    setState: (partialState: Partial<S>) => void
    subscribe: (fn: Listener) => () => void
}

export type ConnectedComponent<
    C extends ComponentType<any>,
    P
> = NamedExoticComponent<JSX.LibraryManagedAttributes<C, P>> &
    hoistNonReactStatics.NonReactStatics<C> & {
        WrappedComponent: C
    }

type MapStateToProps<TStateProps, TOwnProps, State = DefaultRootState> = (
    state: State,
    ownProps: TOwnProps
) => TStateProps

type MapStateToPropsFactory<
    TStateProps,
    TOwnProps,
    State = DefaultRootState
> = (
    initialState: State,
    ownProps: TOwnProps
) => MapStateToProps<TStateProps, TOwnProps, State>

type MapStateToPropsParam<TStateProps, TOwnProps, State = DefaultRootState> =
    | MapStateToPropsFactory<TStateProps, TOwnProps, State>
    | MapStateToProps<TStateProps, TOwnProps, State>
    | null
    | undefined

type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P]
            ? DecorationTargetProps[P]
            : InjectedProps[P]
        : DecorationTargetProps[P]
}

type DistributiveOmit<T, K extends keyof T> = T extends unknown
    ? Omit<T, K>
    : never

type Shared<InjectedProps, DecorationTargetProps> = {
    [P in Extract<
        keyof InjectedProps,
        keyof DecorationTargetProps
    >]?: InjectedProps[P] extends DecorationTargetProps[P]
        ? DecorationTargetProps[P]
        : never
}

type GetProps<C> = C extends ComponentType<infer P>
    ? C extends ComponentClass<P>
        ? ClassAttributes<InstanceType<C>> & P
        : P
    : never

type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> = <
    C extends ComponentType<Matching<TInjectedProps, GetProps<C>>>
>(
    component: C
) => ConnectedComponent<
    C,
    DistributiveOmit<GetProps<C>, keyof Shared<TInjectedProps, GetProps<C>>> &
        TNeedsProps
>

export interface Connect<DefaultState = DefaultRootState> {
    <TStateProps = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>
    ): InferableComponentEnhancerWithProps<TStateProps, TOwnProps>
}

interface StoreProp<S = {}> {
    store: Store<S>
}

interface ConnectedState<TStateProps = {}, Store = {}, TOwnProps = {}> {
    subscribed: TStateProps
    store: Store
    props: TOwnProps
}
// =========== type definition end ============

const Context = createContext<Store | null>(null)
const Provider: React.FC<StoreProps> = (props) => {
    return (
        <div>
            <Context.Provider value={props.store}>
                {props.children}
            </Context.Provider>
        </div>
    )
}
const defaultMapStateToProps: any = () => ({})

export function connect<
    TStateProps = {},
    TOwnProps = {},
    State = DefaultRootState
>(
    mapStateToProps: (
        state: State,
        ownProps: TOwnProps
    ) => TStateProps = defaultMapStateToProps
) {
    return function connectHOC<
        C extends React.ComponentType<
            Matching<TStateProps & StoreProp<State>, GetProps<C>>
        >
    >(WrappedComponent: C) {
        const finalMapStateToProps =
            mapStateToProps || (defaultMapStateToProps as () => TStateProps)
        class Connected extends React.Component<
            TOwnProps,
            ConnectedState<TStateProps, Store<State>, TOwnProps>,
            Store<State>
        > {
            store: Store<State>
            static contextType = Context
            constructor(props: any, context: any) {
                super(props, context)
                this.store = this.context

                this.state = {
                    subscribed: finalMapStateToProps(
                        this.store.getState(),
                        props
                    ),
                    store: this.store,
                    props,
                }
            }

            render() {
                const props = {
                    ...this.props,
                    ...this.state.subscribed,
                    store: this.store,
                } as any
                return <WrappedComponent {...props} />
            }
        }

        return hoistNonReactStatics(Connected, WrappedComponent) as any
    }
}

export { Provider }

export function createStore<S>(initialStore: S): Store<S> {
    let store: S = initialStore
    const listeners: Listener[] = []

    function subscribe(listener: Listener) {
        listeners.push(listener)
        return function unsubscribe() {
            const index = listeners.indexOf(listener)
            if (index >= 0) {
                listeners.splice(index, 1)
            }
        }
    }

    function getState() {
        return store
    }

    function setState(partialStore: Partial<S>) {
        store = { ...store, ...partialStore }
        listeners.forEach((fn) => fn())
    }

    return {
        subscribe,
        getState,
        setState,
    }
}
