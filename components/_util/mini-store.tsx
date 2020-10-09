import * as React from 'react'
import shallowEqual from 'shallowequal'
import { Listener, ProviderProps, Store } from './type'

export function create<S = {}>(initState: S): Store {
    let state = initState
    const listeners: Listener[] = []

    function subscribe(listener: Listener) {
        listeners.push(listener)

        return function unsubscribe() {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }

    function getState() {
        return state
    }

    function notify() {
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }

    function setState(newState: Partial<S>) {
        state = { ...state, ...newState }
        notify()
    }

    return {
        getState,
        setState,
        subscribe,
    }
}

export const MiniStoreContext = React.createContext<Store | null>(null)

export class Provider extends React.Component<ProviderProps> {
    render() {
        return (
            <MiniStoreContext.Provider value={this.props.store}>
                {this.props.children}
            </MiniStoreContext.Provider>
        )
    }
}

function getDisplayName(WrapComponent: React.ComponentType<any>) {
    return WrapComponent.displayName || WrapComponent.name || 'Component'
}

const defaultMapStateToProps = () => ({})

export function connect(mapStateToProps?: (state: State) => TStateProps) {
    return function wrapWithComponent(WrappedComponent: C) {
        const finalMapStateToProps = mapStateToProps || defaultMapStateToProps

        return class Connected extends React.Component {
            static displayName = `Connect(${getDisplayName(WrappedComponent)})`
            static contextType = MiniStoreContext
            store: Store<State>
            unsub: () => void
            constructor(props: TOwnProps, context: Store<State>) {
                super(props, context)
                this.store = context
                this.state = finalMapStateToProps(this.store.getState())
            }
            componentDidMount() {
                this.unsub = this.store.subscribe(() => {
                    this.setState(finalMapStateToProps(this.store.getState()))
                })
            }
            shouldComponentUpdate(nextProps: any, nextState: any) {
                return (
                    !shallowEqual(this.props, nextProps) ||
                    !shallowEqual(this.state, nextState)
                )
            }
            componentWillUnmount() {
                this.unsub()
            }
            render() {
                return (
                    <WrappedComponent
                        {...this.state}
                        {...this.props}
                    ></WrappedComponent>
                )
            }
        }
    }
}
