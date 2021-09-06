import React from "react";
import {Friend} from "./Friend/Friend";
import {Friends} from "./Friends";
import {Consumer} from "../../StoreContext";

export const FriendsContainer = () => {
    return (
        <Consumer>
            {
                store => {
                    const state = store.getState();

                    const friends = state.friendsPage.friends.map(f =>
                        <Friend
                            id={f.id}
                            name={f.name}
                            ava={f.ava}
                        />
                    );

                    return <Friends
                        friends={friends}
                    />
            }
            }
        </Consumer>
    );
}