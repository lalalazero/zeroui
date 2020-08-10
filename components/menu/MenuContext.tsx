import React from 'react'

export interface MenuContextProps {
    selectedKey: string,
    changeKey: (a: string) => string,
    allKeys: Set<string>
}
let selectedKey = ''
let changeKey = (newKey: string) => selectedKey = newKey
let allKeys: Set<string> = new Set()

export const addItemKey = (key: string) => allKeys.add(key)

export const defaultContextValue = {
    selectedKey: selectedKey,
    changeKey,
    allKeys,
}

const MenuContext = React.createContext<MenuContextProps>(defaultContextValue)
MenuContext.displayName = 'MenuContextDisplayName'

export default MenuContext