import React from "react";
import c from './TitleImage.module.css';

type TitleImagePropsType = {
  image: string
};
export const TitleImage: React.FC<TitleImagePropsType> = (props) => {
    return(
        <div>
            <img src={props.image} alt="азгард"/>
        </div>
    );
 };