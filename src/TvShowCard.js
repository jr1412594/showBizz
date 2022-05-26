import React from "react";
import { useParams } from "react-router-dom";

import "./TvShowCard.css";

export default function TvShowCard({ tvShow }) {
    // let params = useParams()
    // const onClick = () => {

    // }
    return (
        <div onClick={(e) => console.log(e.target)}>
            <img
                className="tv-show-image"
                src={tvShow.image.medium}
                alt={tvShow.id}
            />
            <h3>{tvShow.name}</h3>
        </div>
    );
}
