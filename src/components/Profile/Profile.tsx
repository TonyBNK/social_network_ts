import React from "react";
import {MyInfo} from "./MyInfo/MyInfo";
import {TitleImage} from "./TitleImage/TitleImage";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';
import cat_with_tongue from "../../images/cat_with_tongue.jpg";
import angry_cat from "../../images/angry_cat.webp";

export const Profile = () => {

    let posts = [
        {id: 1, ava: cat_with_tongue, message: "Кто насрал в мой лоток?", likesCount: 14},
        {id: 2, ava: angry_cat, message: "Кожанный мешок опять забыл покормить }:(", likesCount: 23},
    ];

    return (
        <div className={c.profile}>
            <TitleImage image={azgard}/>
            <MyInfo ava={cat_wit_glasses} posts={posts}/>
        </div>
    );
};