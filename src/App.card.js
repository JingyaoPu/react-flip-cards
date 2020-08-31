import React, { useState } from "react";
import back from "./blue_back.png"
import './card.css';
function Card(props) {
    return (
        <div className="flip-card" >
            <div className={props.flipped?"flip-card-inner-flipped":'flip-card-inner'} onClick={_=>props.flip(props.value,props.index)} onMouseLeave={_=>props.examine()}>
                <div className={"flip-card-back"}>
                    <img src={back}  alt={"back"} />
                </div>
                <div className={"flip-card-front"}>
                    <img src={props.src} alt={"front"}/>
                </div>
            </div>
        </div>
    );
}

export default Card;

