import React from "react";
import c from "./Header.module.css";

type HeaderPropsType = {
  logotype: string
};
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={c.head}>
            <img src={props.logotype} alt="логотип"/>
        </header>
    );
};