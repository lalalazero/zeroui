import React from 'react'
import ReactDOM from 'react-dom'
import { Tooltip, Button } from '../components'
import './App.scss'

const App = () => (
    <div className="app">
        <div style={{ overflow: 'hidden', marginBottom: '100px' }}>
            <Tooltip title="xxxxxx">
                <Button>测试 overflow: hidden </Button>
            </Tooltip>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '100px' }}>
            <Tooltip title="xxxxxx" placement="bottom">
                <Button>测试 overflow: hidden </Button>
            </Tooltip>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '100px' }}>
            <Tooltip title="xxxxxx" placement="left">
                <Button>测试 overflow: hidden </Button>
            </Tooltip>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '100px' }}>
            <Tooltip title="xxxxxx" placement="right">
                <Button>测试 overflow: hidden </Button>
            </Tooltip>
        </div>
    </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))