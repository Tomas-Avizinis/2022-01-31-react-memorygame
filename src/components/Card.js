import React, {useState} from 'react';

const Card = ({card, index, compare, solved, color, setColor, openIndex, setOpenIndex}) => {

    const openCard=(card)=> {

        setOpenIndex([...openIndex, index]);
        if (!color) setColor(card)
        else compare(color, card);

    };



    return (
        <div className={"card-frame"} >
            <div className={(solved.includes(card) || openIndex.includes(index))? 'card flip' : 'card'} onClick={()=>openCard(card)}>

                <div className={"card-face card-front"}/>
                <div className={"card-face card-back"} style={{backgroundColor:card}} >{card}</div>
            </div>
        </div>

    );
};

export default Card;

// onClick={()=>clickFunk(card)}

//
// {/*<div className={'card'} style={{backgroundColor:card}} onClick={()=>clickFunk(card)}>*/}
// {/*    /!*{card}*!/*/}
// {/*    /!*<img src={card.img} alt={card.name}/>*!/*/}
// {/*</div>*/}