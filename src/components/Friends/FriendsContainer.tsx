import React, {ComponentType} from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {FriendsPageType} from "../../redux/reducers/friendsReducer";
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