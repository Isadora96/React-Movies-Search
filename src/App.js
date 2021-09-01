import React from 'react'
import SearchMovies from "./components/SearchMovies"

function App() {
    return (
        <div className="container">
            <h1 className="title"><span className="accent-color">React</span> Movie Search</h1>
            <SearchMovies /> 
        </div>
    )
}

export default App