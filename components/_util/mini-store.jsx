import React, { useContext, useEffect, useState } from 'react'

const Context = React.createContext(null)

export const Provider = (props) => {
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}

const defaultMapStateToProps = () => {}

export const connect = (mapStateToProps = defaultMapStateToProps) => {
    return function wrapHOC(WrapComponent) {
        const InnerFC = (props) => {
            const store = useContext(Context)
            console.log('connect, store=', store.getState())

            const mappedState = mapStateToProps(store.getState())

            console.log('mappedState,', mappedState)

            const [finalState, setFinalState] = useState(mappedState)

            useEffect(() => {
                const unsub = store.subscribe(() => {
                    const newState = store.getState()
                    console.log('newState = ', newState)

                    const mappedStateNew = mapStateToProps(newState)
                    setFinalState(mappedStateNew)
                })

                return () => {
                    unsub()
                    console.log('清理 store 的订阅')
                }
            }, [])

            return (
                <WrapComponent
                    {...finalState}
                    {...props}
                    store={store}
                ></WrapComponent>
            )
        }
        return InnerFC
    }
}

export function createStore(initialStore = {}) {
    let store = initialStore
    const listeners = []

    function subscribe(listener) {
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
    function setState(partialStore) {
        console.log('setState..,partialState', partialStore)

        store = { ...store, ...partialStore }
        console.log('after..store', store)
        listeners.forEach((fn) => fn())
    }
    return {
        subscribe,
        getState,
        setState,
    }
}
