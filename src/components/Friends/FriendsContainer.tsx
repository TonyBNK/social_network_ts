import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {FriendsPageType} from "../../redux/friendsReducer";


const mapStateToProps = (state: RootStateType): FriendsPageType => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch: any) => ({

});

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);