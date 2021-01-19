import React, { useContext, useEffect, useState } from 'react'

// =========== type definition begin ============

type Listener = () => void

// eslint-disable-next-line
interface DefaultRootState {}

// export interface StoreProps<S = DefaultRootState> {
//     store: Store<S>
// }

export type Store<S = DefaultRootState> = {
    getState: () => S
    setState: (partialState: Partial<S>) => void
    subscribe: (fn: Listener) => () => void
}

type TMapStateToProps<S = DefaultRootState> = (state: S) => Partial<S> | null

type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P]
            ? DecorationTargetProps[P]
            : InjectedProps[P]
        : DecorationTargetProps[P]
}

type ConnectedProps<TStateProps, TOwnProps> = Matching<TStateProps, TOwnProps>

// =========== type definition end ============

const Context = React.createContext<Store | null>(null)

export const Provider: React.FC<{ store: Store }> = (props) => {
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}

const defaultMapStateToProps: any = () => null

export function connect<TStateProps = {}, TOwnProps = {}>(
    mapStateToProps: TMapStateToProps = defaultMapStateToProps
) {
    return function wrapHOC<
        C extends React.FC<ConnectedProps<TStateProps, TOwnProps>>
    >(WrapComponent: C) {
        const InnerFC = (props: ConnectedProps<TStateProps, TOwnProps>) => {
            const store = useContext(Context)
            // console.log('connect, store=', store.getState())

            let mappedState: Partial<TStateProps> | null = null

            if (store) {
                mappedState = mapStateToProps(store.getState())
            }

            // console.log('mappedState,', mappedState)

            // const [finalState, setFinalState] = useState(mappedState)

            const [_, setX] = useState({})

            useEffect(() => {
                let unsub: Listener | null = null
                if (store) {
                    unsub = store.subscribe(() => {
                        // const newState = store.getState()
                        // console.log('newState = ', newState)

                        // const mappedStateNew = mapStateToProps(newState)
                        // setFinalState(mappedStateNew)
                        setX({})
                    })
                }

                return () => {
                    unsub && unsub()
                    // console.log('清理 store 的订阅')
                }
            }, [])

            return (
                <WrapComponent
                    {...(mappedState as any)}
                    {...props}
                    store={store}
                ></WrapComponent>
            )
        }
        return InnerFC
    }
}

export function createStore<S>(initialStore: S = {} as any): Store<S> {
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
        // console.log('setState..,partialState', partialStore)

        store = { ...store, ...partialStore }
        // console.log('after..store', store)
        listeners.forEach((fn) => fn())
    }
    return {
        subscribe,
        getState,
        setState,
    }
}
