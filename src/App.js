import { useEffect, useState } from "react";
import "./App.css";
import ShowSearch from "./ShowSearch";

import TvShowsContainer from "./TvShowsContainer";

const baseURL = " https://api.tvmaze.com/shows";

function App() {
    const [tvShows, setTvShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(baseURL)
            .then((tvShows) => tvShows.json())
            .then((tvShows) => setTvShows(tvShows))
            .then(console.log("fired useEffect"));
    }, []);

    const filteredShows = () => {
        return tvShows.filter((tvShow) => {
            if (!searchTerm) {
                return tvShow;
            } else {
                return tvShow.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            }
        });
    };

    return (
        <div className="App">
            <p>TvMaze API</p>
            <div className="search-container">
                <ShowSearch
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                />
            </div>
            <TvShowsContainer tvShows={filteredShows()} />
        </div>
    );
}

export default App;
