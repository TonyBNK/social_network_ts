import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";


type MapStatePropsType = {
    isAuth: boolean
}
type StateForRedirectType = (state: RootStateType) => ({
    isAuth: boolean
})
const mapStateToPropsForRedirect: StateForRedirectType = (state):
    MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T> (Component: ComponentType<T>) {
    const ComponentWithRedirect = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(ComponentWithRedirect)
}