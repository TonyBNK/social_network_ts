import React from "react";
import {MyInfo} from "./MyInfo/MyInfo";
import {TitleImage} from "./TitleImage/TitleImage";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';

export const Profile = () => {
    return (
        <div className={c.profile}>
            <TitleImage image={azgard}/>
            <MyInfo ava={cat_wit_glasses}/>
        </div>
    );
};