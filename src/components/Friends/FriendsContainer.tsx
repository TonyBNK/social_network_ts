import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {RootStateType} from "../../bll/store";
import {FriendsPageType} from "../../bll/reducers/friendsReducer";


const mapStateToProps = (state: RootStateType): FriendsPageType => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch: any) => ({

});

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);