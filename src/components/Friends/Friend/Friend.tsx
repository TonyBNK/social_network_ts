import React from "react";
import c from './Friend.module.css';

export type FriendType = {
    id: string
    name: string
    ava: string
}
export const Friend: React.FC<FriendType> = React.memo((props) => {
    return(
      <div className={c.friend}>
          <img src={props.ava} alt="ava"/><span>{props.name}</span>
      </div>
    );
});