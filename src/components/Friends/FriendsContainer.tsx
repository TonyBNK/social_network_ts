import React, {ComponentType} from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {RootStateType} from "../../bll/store";
import {FriendsPageType} from "../../bll/reducers/friendsReducer";
import {compose} from "redux";


const mapStateToProps = (state: RootStateType): FriendsPageType => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch: any) => ({

});

export const FriendsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(Friends);