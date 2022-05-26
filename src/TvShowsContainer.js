import TvShowCard from "./TvShowCard";

import "./TVShowsContainer.css";

export default function TvShowsContainer({ tvShows }) {
    const theShows = tvShows.map((tvShow) => (
        <TvShowCard tvShow={tvShow} key={tvShow.id} />
    ));

    return <div className="tv-show-container">{theShows}</div>;
}
