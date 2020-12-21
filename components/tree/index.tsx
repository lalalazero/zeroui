import React from 'react'
import { classname } from '../_util/classes'
import './style.scss'

const PREFIX = 'zeroui-tree'

export type TreeItem = {
    title?: string
    key?: string
    children?: TreeItem[]
}

export type TreeData = TreeItem[]

export type TreeProps = {
    treeData: TreeItem[]
}

function renderChildren(treeData: TreeData, level = 1) {
    const jsxList = treeData.map((item) => {
        const key = `level/${level}-value/${item.key}`
        return (
            <div
                key={key}
                data-key={key}
                style={{ marginLeft: (level - 1) * 10 }}
                className={classname(PREFIX + '-item')}
            >
                <span className={PREFIX + '-label'}>{item.title}</span>
                {item.children && renderChildren(item.children, level + 1)}
            </div>
        )
    })

    return <>{jsxList}</>
}

const Tree: React.FC<TreeProps> = (props) => {
    return <div className={PREFIX}>{renderChildren(props.treeData)}</div>
}

export default Tree
