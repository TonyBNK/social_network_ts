import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {StateType} from "../../redux/store-redux";
import {FriendsPageType} from "../../redux/friendsReducer";


const mapStateToProps = (state: StateType): FriendsPageType => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch: any) => ({

});

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);