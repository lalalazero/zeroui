import React from 'react'
import ReactDOM from 'react-dom'
import { Tooltip, Button } from '../components'
import './App.scss'

const App = () => (
    <div className="app">
        <Tooltip title="xxxxxx">
            <Button>测试 overflow: hidden </Button>
        </Tooltip>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))