import React from "react";
export const CardNews = ({item}) =>{
    return(
        <div>
            <h1>{item.title}</h1>
            <img src={item.img} />
            <p>{item.info}</p>
        </div>
    )
}