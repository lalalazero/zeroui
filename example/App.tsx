import React from 'react'
import ReactDOM from 'react-dom'
import {
    connect,
    createStore,
    Provider,
} from '../components/_util/mini-store.jsx'
import './App.scss'

const store = createStore({ n: 1 })

const Foo = (props) => {
    const { store } = props

    const onClick = () => {
        console.log('onClick')
        if (store) {
            console.log('+1')
            console.log(store.getState())
            const x = props.counter
            store.setState({ n: x + 1 })
        }
    }
    return (
        <div>
            <p>Foo 组件</p>
            <p>n = {props.counter}</p>
            <button onClick={onClick}>+1</button>
        </div>
    )
}
const mapStateToProps: any = (store) => ({ counter: store.n })
const MappedFoo: React.FC<any> = connect(mapStateToProps)(Foo)
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Foo />
                <MappedFoo />
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
