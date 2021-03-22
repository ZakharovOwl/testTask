import React from "react";


const CurrencyCard =(props)=>{
return(
    <div className='card'>
        <p>{props.abbreviation}</p>
        <p>{props.name}</p>
        <p>{`${props.rate} BYN`}</p>
    </div>
)
}

export default CurrencyCard;