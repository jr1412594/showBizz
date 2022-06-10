import React from "react";

export default function Episode({ episode }) {
  console.log(episode.summary.slice(3, -4)," :this is the summary");

  const cutThePOut = () => {
    return episode.summary.slice(3, -4);
  }
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "auto",
                borderBottom: '1px solid grey',
                paddingTop: '4px',
                paddingBottom: '4px',
                marginBottom: '3px',
                marginTop: '3px'
            }}
        >
            <div>
                <img
                    style={{ width: "350px", height: "300px", boxShadow: '10px 10px 18px 4px' }}
                    src={episode.image.original}
                    alt={episode.name}
                />
            </div>
            <div style={{ maxWidth: "300px" }}>
                <h2 style={{fontStyle: 'italic'}}>Episode Name: {episode.name}</h2>
                <h3>Season: {episode.season}</h3>
                <h3>AirDate: {episode.airdate}</h3>
                {cutThePOut(episode.summary)}
            </div>
        </div>
    );
}
