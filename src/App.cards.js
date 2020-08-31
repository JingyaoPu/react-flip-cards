import React, { useState,useEffect } from "react";
import Card from './App.card';
import AC from "./AC.png";
import AD from "./AD.png";
import AH from "./AH.png";

function Cards(props) {
    const [cardArray, setcardArray] = useState([
        {value:"AC",index:0,src:AC},{value:"AC",index:1,src:AC},
        {value:"AD",index:0,src:AD},{value:"AD",index:1,src:AD},
        {value:"AH",index:0,src:AH},{value:"AH",index:1,src:AH}
    ])
    const [cardState, setCardState] = useState(
        {
            AC:{flipped:[false,false]},
            AD:{flipped:[false,false]},
            AH:{flipped:[false,false]},
        }
    )
    const reset = ()=>{
        let cards = cardArray;
        for(let i = cards.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }
        setcardArray([...cards]);
    }

    const [pair, setPair] = useState([])
    useEffect(()=>{
        reset();
    },[])


    const flip = (value, index)=>{
        let preState = cardState;
        preState[value].flipped[index] = !preState[value].flipped[index];
        setCardState({...preState});
    }
    const examine = ()=>{
        if(pair.length === 2){
            if (pair[0].value !== pair[1].value){
                setTimeout(()=>{
                    flip(pair[0].value,pair[0].index);
                    flip(pair[1].value,pair[1].index);
                },500);

            }
            setPair([]);
        }

    }

    const try_flip = (value, index)=>{
        if(cardState[value].flipped.includes(false)){
            if(cardState[value].flipped[index] === true){
                const p = pair.filter(e=>e.value !== value);
                setPair(p);
            }else{
                setPair([...pair,{value:value,index:index}]);
            }
            flip(value, index);
        }
    }

    return (
        <div>
        <span>{JSON.stringify(cardState)}</span>
        <span>{JSON.stringify(pair)}</span>
        <div className = "cards-container">
            {cardArray.map(e=> <Card value = {e.value} index = {e.index} src={e.src} flipped = {cardState[e.value].flipped[e.index]} flip = {try_flip} examine = {examine}/>)}
        </div>
        </div>

    )
}
export default Cards;
