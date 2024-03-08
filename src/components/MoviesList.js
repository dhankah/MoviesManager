import React from 'react';
import MovieTile from './MovieTile.js';

export default function MoviesList (props) {

    let movies = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1611419010196-a360856fc42f',
            title: 'Scary Fog',
            year: '2003',
            genres: 'Horror',
            id: 1
        }
    ]

     return (
        <>
        {movies.map((movie) => (
            <MovieTile imageUrl={movie.imageUrl}
            title = {movie.title}
            releaseYear = {movie.year}
            genres = {movie.genres}
            onSelect= {(arg) => console.log(arg)}
            key = {movie.id}/>
             ))}
        </>
     )
}

MovieTile.defaultProps = {
  movieName: "Movie Title"
}