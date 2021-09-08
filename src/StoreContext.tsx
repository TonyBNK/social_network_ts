import React, {createContext} from "react";
import {StoreType} from "./redux/store";


const StoreContext = createContext({} as StoreType);

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}
const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

type ConsumerType = {
    children: (store: StoreType) => React.ReactNode
}
const Consumer = (props: ConsumerType) => {
    return <StoreContext.Consumer>
        {props.children}
    </StoreContext.Consumer>
}

