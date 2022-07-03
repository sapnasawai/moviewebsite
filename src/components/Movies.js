import React from 'react';
import '../App.css'
import spinner from './spinner.gif'
import {NavLink} from 'react-router-dom'
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie  , isLoading} = useGlobalContext();

  if (isLoading) {
    return (
      <div >
        <div className='loading'>
           <img src={spinner} alt="spinner gif"/>
        </div>
      </div>
    )
  }
  return (
    <>
     <section className='movie-page'>
      <div className='container grid grid-4-col'>
      {movie.map((curMovie) => {
  
        const { imdbID, Title, Poster} = curMovie;
        const movieName = Title.slice(0,18)
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID} >
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName.length >= 15 ? `${movieName}...` : movieName }</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
           
        )
      })}
      </div>
     </section>
    </>
  )
}

export default Movies