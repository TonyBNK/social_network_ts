import React from "react";
import {Friends} from "./Friends";
import {Consumer} from "../../StoreContext";

export const FriendsContainer = () => {
    return (
        <Consumer>
            {
                store => {
                    const state = store.getState();

                    return <Friends
                        friends={state.friendsPage.friends}
                    />
                }
            }
        </Consumer>
    );
}