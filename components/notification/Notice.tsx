import React from 'react'
import { scopedClassMaker } from '../_util/classes'
import { NoticeContent } from './Notification'

const sc = scopedClassMaker('zeroUI-notice')
const Notice: React.FC<NoticeContent> = ({ title, body }) => {
    return (
        <div className={sc('')}>
            <div className={sc('title')}>{title}</div>
            <div className={sc('body')}>{body}</div>
        </div>
    )
}

export default Notice
