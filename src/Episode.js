import React from 'react'

export default function Episode({episode}) {
  console.log(episode, " :in episode")
  return (
    <div>
      <img style={{width: '350px', height: '300px'}}src={episode.image.original} alt={episode.name} />
      <h2>{episode.name}</h2>
      <h3>{episode.season}</h3>
      <h3>{episode.airdate}</h3>
      <p>{episode.summary}</p>
    </div>
  )
}
