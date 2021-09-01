import React from "react"

function MovieCard({movie}) {
    return (
        <div className="card" key={movie.id}>
            <div className="card-content-img">
                <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'} />
            </div>
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
                <p><small><i className="far fa-calendar-check"></i> RELEASE DATE: {movie.release_date}</small></p>
                <p><small><i className="fas fa-star"></i> RATING: {movie.vote_average}</small></p>
                <p className="card--desc">
                    {movie.overview ? movie.overview : 'description unavailable'}`
                </p>
            </div>
        </div>
    )
}

export default MovieCard