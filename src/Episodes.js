import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Episode from "./Episode";

export default function Episodes() {
    const params = useParams();
    let id = params.showId;
    const [episodes, setEpisodes] = useState([]);
    console.log(params, " :this is params");
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
            .then((response) => response.json())
            .then((response) => setEpisodes(response));
    }, [id]);

    console.log(episodes, " :this are the episodes")

    const displayEpisodes = () => {
        return episodes.map(episode => {
            return <Episode episode={episode} key={episode.id} />
        })
    }

    return (<div style={{display: 'block'}}>
        Episodes: {episodes.length}
        {displayEpisodes()};
        </div>);
}
