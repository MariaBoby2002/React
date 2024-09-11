import React, { useState} from "react";
import heart from "./images/heart.svg";
function CardPage({title,handler,image,description}){
    const [isClicked, setIsClick]=useState(0);
    const handleClick=()=>{
        setIsClick(!isClicked);
    };
    return (
<div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
            <img src={image}></img>
            </figure>
        </div>
    </div>
    <div className="card-content">
        <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handler}</p>

        </div>
        <p className="content">{description}</p>

    </div>
    <img 
        className="heart"
        alt="heart"
        src={heart}
        onClick={handleClick}
        style={{width: isClicked ? "60px":"20px",cursor:"pointer"}}
    />
</div>
    );

}
export default CardPage;