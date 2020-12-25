import React, { ComponentType, useContext, useEffect, useState } from 'react'

export const Context = React.createContext<Store | null>(null)

export interface ProviderProps {
    store: Store
}
export const Provider: React.FC<ProviderProps> = (props) => {
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}

export type Store<T = Record<string, unknown>> = {
    getState: () => T
    setState: (partialState: Partial<T>) => void
    subscribe: (fn: Listener) => Listener
}

export type Listener = () => void

export function createStore<T>(initState: T): Store<T> {
    let state = initState
    const listeners: Listener[] = []
    function setState(partialState: Partial<T>) {
        state = { ...state, ...partialState }
    }

    function subscribe(fn: Listener) {
        listeners.push(fn)
        return function unsubscribe() {
            const index = listeners.indexOf(fn)
            if (index >= 0) {
                listeners.splice(index, 1)
            }
        }
    }

    return {
        getState: () => state,
        setState,
        subscribe,
    }
}

export type TmapStateToProps<T> = (
    store: Store<T> | null
) => Record<string, unknown>

const defaultMapStateToProps = () => ({})

export function connect(mapStateToProps: any = defaultMapStateToProps) {
    return function wrapHOC(WrapComponent: ComponentType<any>) {
        const FC: React.FC<any> = (props) => {
            const store = useContext(Context)

            const [mappedState, setMappedState] = useState(
                mapStateToProps(store)
            )

            const listener = () => {
                console.log('1111')
                setMappedState(mapStateToProps(store))
            }

            useEffect(() => {
                if (store) {
                    const unsubscribe = store.subscribe(listener)
                    return unsubscribe
                }
                // eslint-disable-next-line
                return () => {}
            }, [])

            return <WrapComponent {...props} {...mappedState} />
        }

        return FC
    }
}
