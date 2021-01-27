import { PropsWithChildren, useMemo } from 'react'
import { collectMenuKeys } from './util'

export interface useProps extends PropsWithChildren<{}> {
    selectedKeys: string[]
    generateKey: string
    openKeys: string[]
}

export const useSelected = (props: useProps): boolean => {
    return useMemo(() => {
        if (
            props.selectedKeys &&
            props.selectedKeys.length > 0 &&
            props.selectedKeys.indexOf(props.generateKey) >= 0
        ) {
            return true
        }

        return false
    }, [props.selectedKeys, props.generateKey])
}

export const useChildSelected = (props: useProps): boolean => {
    const childrenKeys = collectMenuKeys(props.children, props.generateKey)

    return useMemo(() => {
        if (
            props.selectedKeys &&
            props.selectedKeys.length > 0 &&
            props.selectedKeys.some(
                (key: string) => childrenKeys.indexOf(key) >= 0
            )
        ) {
            return true
        }

        return false
    }, [props.selectedKeys, childrenKeys])
}

export const useVisible = (props: useProps): boolean => {
    return useMemo(() => {
        if (
            props.openKeys &&
            props.openKeys.length > 0 &&
            props.openKeys.indexOf(props.generateKey) >= 0
        ) {
            return true
        }

        return false
    }, [props.openKeys, props.generateKey])
}
