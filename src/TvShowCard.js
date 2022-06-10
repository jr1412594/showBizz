import { Link, Outlet } from "react-router-dom";

import "./TvShowCard.css";

export default function TvShowCard({ tvShow }) {

    return (
        <div>
            <Link style={{ color: "black" }} to={`episodes/${tvShow.id}`}>
                <img
                    className="tv-show-image"
                    src={tvShow.image.medium}
                    alt={tvShow.name}
                />
                <h3>{tvShow.name}</h3>
            </Link>
                <h4>Reviews: {tvShow.reviews.length}</h4>
            <Outlet />
        </div>
    );
}
