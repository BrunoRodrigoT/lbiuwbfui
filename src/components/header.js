import React from "react";
import '../assets/css/header.css'

export default function Header(){
    return (
        <div id="header">
            <div id="into_header">
                <p>#stay<span className="span">at</span>home</p>
                <h1 id="title-h"><span className="span">tascom</span></h1>
                <p id="subtitle-h"><span className="span">covid</span> sumary</p>
            </div>
        </div>
    )
}