import React from "react";

export default function GenreSearch({ genres, passGenre, genre }) {
    const allGenres = [];
    genres.map((genre) => {
        genre.genres.forEach((genre) => {
            allGenres.push(genre);
        });
        return allGenres;
    });

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let uniqueGenres = allGenres.filter(onlyUnique)

    const selectOptions = () => {
        return uniqueGenres.map(genre => {
            return <option key={Math.random()}>{genre}</option>
        })
    }
    const handleChange = (event) => {
        let genre = event.target.value
        passGenre(genre)
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "2rem",
            }}
        >
            <label style={{ margin: "auto" }}>Enter Genre</label>
            <select onChange={handleChange} value={genre}>
                <option>Select</option>
                {selectOptions()}
            </select>
        </div>
    );
}
