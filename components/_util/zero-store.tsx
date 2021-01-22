import React, { useContext, useEffect, useState } from 'react'
import shallowEqual from 'shallowequal'

// =========== type definition begin ============

type Listener = () => void

export type Store<S = {}> = {
    getState: () => S
    setState: (partialState: Partial<S>) => void
    subscribe: (fn: Listener) => () => void
}

type TMapStateToProps<S = {}> = (state?: S) => Partial<S> | null

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

const defaultMapStateToProps: any = () => ({})

export function connect<TStateProps = {}, TOwnProps = {}>(
    mapStateToProps: TMapStateToProps<TStateProps> = defaultMapStateToProps
) {
    return function wrapHOC<
        C extends React.FC<ConnectedProps<TStateProps, TOwnProps>>
    >(WrapComponent: C) {
        const InnerFC = (props: ConnectedProps<TStateProps, TOwnProps>) => {
            const store = useContext(Context)

            const storeState = store ? store.getState() : undefined

            const [
                mappedState,
                setMappedState,
            ] = useState<Partial<TStateProps> | null>(
                mapStateToProps(storeState as TStateProps)
            )

            useEffect(() => {
                let unsub: Listener | null = null
                if (store) {
                    unsub = store.subscribe(() => {
                        const newStoreState = store.getState()
                        const newMappedState = mapStateToProps(
                            newStoreState as TStateProps
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
        store = { ...store, ...partialStore }
        listeners.forEach((fn) => fn())
    }
    return {
        subscribe,
        getState,
        setState,
    }
}
