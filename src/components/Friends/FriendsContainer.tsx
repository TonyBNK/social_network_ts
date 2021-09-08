import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {StateType} from "../../redux/store-redux";


const mapStateToProps = (state: StateType) => ({
   friends: state.friendsPage.friends
});

const mapDispatchToProps = (dispatch: any) => ({

});

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);