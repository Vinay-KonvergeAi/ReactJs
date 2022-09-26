import React from "react";

export default function Card(props){

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }


    //{props.openSpots === 0 && <div className="card--badge">online</div>}
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`} className="card_image" alt=""/>
            <div className="card_stats">
                <img src="./images/star.png" alt="" className="card_star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray" >({props.item.stats.reviewCount}) . </span>
                <span className="gray" >{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold" >From ${props.item.price}</span> / person</p>
        </div>
    )
}