import { Typography } from "@mui/material";
import React from "react";
import "./YoutubeCard.css"
const YoutubeCard=({
    url="https://www.youtube.com/@complexaayush4195/videos",
    title="Title here",
    image,
})=>{
    return( 
        <div className="youtubeCard">
            <a href={url} target="blank">
                <img src={image} alt="video"/>
                <Typography>{title}</Typography>
            </a>
        </div>
    )
}

export default YoutubeCard;