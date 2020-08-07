import React from 'react'

export interface MenuContextProps {
    selectedKey: string,
    changeKey: (a: string) => string
}
let selectedKey = ''
let changeKey = (newKey: string) => selectedKey = newKey

export const defaultContextValue = {
    selectedKey: selectedKey,
    changeKey
}

const MenuContext = React.createContext<MenuContextProps>(defaultContextValue)
MenuContext.displayName = 'MenuContextDisplayName'

export default MenuContext