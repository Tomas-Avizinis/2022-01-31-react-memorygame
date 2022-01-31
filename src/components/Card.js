import React from 'react';

const Card = ({card, index, compare, solved, color, setColor, openIndex, setOpenIndex}) => {

    const openCard=(card)=> {

        setOpenIndex([...openIndex, index]);
        if (!color) setColor(card)
        else compare(color, card);

    };



    return (
        <div className={"card-frame"} >
            <div className={(solved.includes(card) || openIndex.includes(index))? 'card flip' : 'card'} onClick = {()=>{
                if (!openIndex.includes(index)) openCard(card)}}>

                <div className={"card-face card-front"}/>
                <div className={"card-face card-back"} style={{backgroundColor:card}} />
            </div>
        </div>

    );
};

export default Card;
