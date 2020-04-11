import React from 'react'
import { Icon } from '../../components'
import './Icon.example.scss'
const IconExample:React.FunctionComponent = () =>{
    return (
        <div className='icon-example'>
            <ul>
                <li>
                    <Icon name="like"></Icon><br/>
                    <span>like</span>
                </li>
                <li>
                    <Icon name="info"></Icon><br/>
                    <span>info</span>
                </li>
                <li>
                    <Icon name="error"></Icon><br/>
                    <span>error</span>
                </li>
                <li>
                    <Icon name="loading"></Icon><br/>
                    <span>loading</span>
                </li>
                <li>
                    <Icon name="alipay"></Icon><br/>
                    <span>alipay</span>
                </li>
                <li>
                    <Icon name="wechat"></Icon><br/>
                    <span>wechat</span>
                </li>
                <li>
                    <Icon name="left"></Icon><br/>
                    <span>left</span>
                </li>
                <li>
                    <Icon name="right"></Icon><br/>
                    <span>right</span>
                </li>
                <li>
                    <Icon name="down"></Icon><br/>
                    <span>down</span>
                </li>
                <li>
                    <Icon name="setting"></Icon><br/>
                    <span>setting</span>
                </li>
                <li>
                    <Icon name="emptysearch"></Icon><br/>
                    <span>emptysearch</span>
                </li>
                <li>
                    <Icon name="filled-up"></Icon><br/>
                    <span>filled-up</span>
                </li>
                <li>
                    <Icon name="filled-down"></Icon><br/>
                    <span>filled-down</span>
                </li>
                <li>
                    <Icon name="download"></Icon><br/>
                    <span>download</span>
                </li>
                <li>
                    <Icon name="next-double"></Icon><br/>
                    <span>next-double</span>
                </li>
                <li>
                    <Icon name="prev-double"></Icon><br/>
                    <span>prev-double</span>
                </li>
            </ul>
        </div>
    )
}

export default IconExample