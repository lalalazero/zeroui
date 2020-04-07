import React from 'react'
import './Color.example.scss'

const ButtonExample:React.FunctionComponent = () =>{
    return (
        <div className="example-color">
            <p>主色系</p>
            <div>
                <span className="cell" style={{ background: '#e6fffb', color: 'black' }}>#e6fffb</span>
                <span className="cell" style={{ background: '#36cfc9' }}>#36cfc9</span>
                <span className="cell" style={{ background: '#13c2c2' }}>#13c2c2</span>
                <span className="cell" style={{ background: '#08979c' }}>#08979c</span>
            </div>

            <p>功能色</p>
            <div>
                <span className="cell" style={{ background: '#13c2c2' }}>#13c2c2</span>
                <span className="cell" style={{ background: '#ff4d4f' }}>#ff4d4f</span>
                <span className="cell" style={{ background: '#52c41a' }}>#52c41a</span>
                <span className="cell" style={{ background: '#faad14' }}>#faad14</span>

            </div>

            <p>中性色(浅色背景)</p>
            <div>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.85)' }}>black 85%</span>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.65)' }}>black 65%</span>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.45)' }}>black 45%</span>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.25)' }}>black 25%</span>
            </div>
            <div>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.15)', color: 'black' }}>black 15%</span>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.06)', color: 'black' }}>black 6%</span>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.04)', color: 'black' }}>black 4%</span>
                <span className="cell" style={{ background: 'rgba(0,0,0,0.02)', color: 'black' }}>black 2%</span>
            </div>

            {/*<p>中性色(深色背景)</p>*/}
            {/*<div style={{ background: 'black', width: '624px' }}>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.85)' }}>white 85%</span>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.65)' }}>white 65%</span>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.45)' }}>white 45%</span>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.3)' }}>white 30%</span>*/}
            {/*</div>*/}
            {/*<div style={{ background: 'black', width: '624px' }}>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.26)', color: 'white' }}>white 25%</span>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.18)', color: 'white' }}>white 18%</span>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.10)', color: 'white' }}>white 10%</span>*/}
            {/*    <span className="cell" style={{ background: 'rgba(255,255,255,0.06)', color: 'white' }}>white 6%</span>*/}
            {/*</div>*/}

        </div>
    )
}

export default ButtonExample