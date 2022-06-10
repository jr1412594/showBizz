import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";
import "./App.css";
import GenreSearch from "./GenreSearch";
import ShowSearch from "./ShowSearch";

import TvShowsContainer from "./TvShowsContainer";

const baseURL = " https://api.tvmaze.com/shows";

function App() {
    const [tvShows, setTvShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("Select");

    console.log(genre, " :in my app genre bitches!")

    const reviews = [];
    useEffect(() => {
        fetch(baseURL)
            .then((tvShows) => tvShows.json())
            .then(tvShows => tvShows.map(tvShow => {
                return {...tvShow, reviews}
            }))
            .then((tvShows) => setTvShows(tvShows))
            .then(console.log("fired useEffect"));
    }, []);

    console.log(tvShows, " :do you have reviews")
    const passGenre = (x) => {
        return setGenre(x);
    }
    const filteredShows = () => {
        return tvShows.filter((tvShow) => {
            if (!searchTerm) {
                return tvShow;
            } else {
                return tvShow.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            }
        })
        .filter(tvShow => {
            if(genre === 'Select') {
                return tvShow
            } else {
                return tvShow.genres.includes(genre)
            }
        })
    };

    const clearAll = () => {
        setSearchTerm('');
        setGenre('Select')
    }

    return (
        <div className="App">
            <p>TvMaze API</p>
            <div className="search-container">
                <ShowSearch
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                />
                <GenreSearch genres={filteredShows()} passGenre={passGenre} genre={genre}/>
                <button onClick={clearAll}>Clear</button>
            </div>
            <TvShowsContainer tvShows={filteredShows()} />
        </div>
    );
}

export default App;
