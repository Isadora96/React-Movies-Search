import React, {useState} from "react"
import MovieCard from "./MovieCard"

function SearchMovies() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

     function handleChange(e) {
        const query = e.target.value
        setQuery(query)
    }
    
    const searchMovies = async (e) => {
        e.preventDefault()
                        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=395598e83f13d4958145b17563884ed7&language=en-US&query=${query}&page=1&include_adult=false`
        
         try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results)
        }catch(err){
            console.error(err);
        }
    }
    function handleClick(e) {
         if(query === ''){
           alert('please, enter the movie name')
            e.preventDefault()
        }
    }
            
    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input
                className="input"
                type="text"
                name="query" 
                value={query}
                placeholder="i.e Jurassic Park"
                onChange={handleChange}
                />
            <button type="submit" className="button" onClick={handleClick}>Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map( movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>  
        </> 
    )
}

export default SearchMovies