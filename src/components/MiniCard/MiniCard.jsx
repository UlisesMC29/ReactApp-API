import React from "react";
export const MiniCard = (item) => {
    console.log(item.image);
    return (
        <div className="mini-container">
            <div className="wrapper">
                <img src={item.item.image} alt="chracter photo" />
                <h1>{item.item.name}</h1>
                <span>{item.item.species}</span>
                <span>{item.item.status}</span>
            </div>
        </div >
    );
};


