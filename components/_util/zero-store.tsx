import React, {
    FunctionComponent,
    useContext,
    useEffect,
    useState,
} from 'react'
import shallowEqual from 'shallowequal'

// =========== type definition begin ============

type Listener = () => void

// eslint-disable-next-line
type DefaultRootState = {}

export type Store<S = DefaultRootState> = {
    getState: () => S
    setState: (partialState: Partial<S>) => void
    subscribe: (fn: Listener) => () => void
}

type TMapStateToProps<TStateProps, State = DefaultRootState> = (
    state: State
) => TStateProps

export type ConnectedProps<TStateProps, State, TOwnProps> = TStateProps & {
    store: Store<State>
} & TOwnProps

export type ConnectedComponent<
    TStateProps,
    State,
    TOwnProps
> = FunctionComponent<ConnectedProps<TStateProps, State, TOwnProps>>

// =========== type definition end ============

const Context = React.createContext<Store | null>(null)

export const Provider: React.FC<{ store: Store }> = (props) => {
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}

const defaultMapStateToProps: any = () => ({})

export function connect<
    TStateProps = {},
    State = DefaultRootState,
    TOwnProps = {}
>(
    mapStateToProps: TMapStateToProps<
        TStateProps,
        State
    > = defaultMapStateToProps
) {
    return function connectHOC<C extends React.FC<TOwnProps>>(
        WrapComponent: C
    ): ConnectedComponent<TStateProps, State, TOwnProps> {
        const InnerFC = (ownProps: any) => {
            const store = useContext(Context)
            const storeState = store ? store.getState() : undefined

            const [mappedState, setMappedState] = useState<TStateProps>(
                mapStateToProps(storeState as State)
            )

            useEffect(() => {
                let unsub: Listener | null = null
                if (store) {
                    unsub = store.subscribe(() => {
                        const newStoreState = store.getState()
                        const newMappedState = mapStateToProps(
                            newStoreState as State
                        )
                        if (!shallowEqual(newMappedState, mappedState)) {
                            setMappedState(newMappedState)
                        }
                    })
                }

                return () => {
                    unsub && unsub()
                }
            }, [mappedState])

            return (
                <WrapComponent
                    {...mappedState}
                    {...ownProps}
                    store={store}
                ></WrapComponent>
            )
        }

        ;(InnerFC as FunctionComponent).displayName =
            WrapComponent.displayName || WrapComponent.name

        return InnerFC
    }
}

export function createStore<S>(initialStore: S = {} as S): Store<S> {
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
