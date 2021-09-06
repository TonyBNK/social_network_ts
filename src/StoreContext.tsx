import React, {createContext} from "react";
import {store} from "./redux/store-redux";

type StoreType = typeof store;
export const StoreContext = createContext({} as StoreType);

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

type ConsumerType = {
    children: (store: StoreType) => React.ReactNode
}
export const Consumer = (props: ConsumerType) => {
    return <StoreContext.Consumer>
        {props.children}
    </StoreContext.Consumer>
}

