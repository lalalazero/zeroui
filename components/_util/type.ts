import { ComponentType, NamedExoticComponent } from 'react'

export const tuple = <T extends string[]>(...args: T) => args

// mini-store type definition
export interface Store<S = {}> {
    setState: (state: Partial<S>) => void
    getState: () => S
    subscribe: (listener: () => void) => () => void
}

export interface StoreProp<S = {}> {
    store: Store<S>
}

export interface Listener {
    (): void
}
export interface ProviderProps {
    store: Store
}

export type GetProps<C> = C extends React.ComponentType<infer P> ? P : never
export type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P]
            ? DecorationTargetProps[P]
            : InjectedProps[P]
        : DecorationTargetProps[P]
}

export type Shared<InjectedProps, DecorationTargetProps> = {
    [P in Extract<
        keyof InjectedProps,
        keyof DecorationTargetProps
    >]?: InjectedProps[P] extends DecorationTargetProps[P]
        ? DecorationTargetProps[P]
        : never
}

export type TConnectedComponent<
    C extends ComponentType<any>,
    T,
    P
> = NamedExoticComponent<
    JSX.LibraryManagedAttributes<
        C,
        Omit<GetProps<C>, keyof Shared<T, GetProps<C>>> & P
    >
> & {
    WrappedComponent: C
}
