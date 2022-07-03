import React, {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { API_URL } from './context';
import spinner from './spinner.gif'
const SingleMovie = () => {

  const { id } = useParams();

 
    const [isLoading, setIsLoading] = useState('true');
    const [movie, setMovie] = useState("");

    const getMovies = async (url) => {
  
            setIsLoading(true);
            
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === 'True')
            {
                setIsLoading(false);
                setMovie(data)
            }
        }
        catch(error) {
            console.log(error);
        }
    };
   
    useEffect(() => {
        var timerOut = setTimeout (() => {
            getMovies(`${API_URL}&i=${id}`)
        }, 500)

        return (() => clearTimeout(timerOut))
    }, [id]);

    if(isLoading) {
      return (
        <div className='movie-section'>
          <div className='loading'><img src={spinner} alt="spinner gif"/></div>
        </div>
      )
    }
    const {Poster, Title, Released, Actors, Genre, imdbRating, Country} = movie;
    return (
      <div className='App-header'>
        <section className='movie-section'>
          <div className='movie-card'>
           
            <figure>
              <img src={Poster} alt=""/>
            </figure>

            <div className='card-content'>
              <p className='title'>{Title}</p>
              <p className='card-text'>{Released}</p>
              <p className='card-text center'>{Actors.slice(0,30)}</p>
              <p className='card-text'>{Genre.slice(0,30)}</p>
              <p className='card-text'>{imdbRating}</p>
              <p className='card-text'>{Country}</p>
              <NavLink to='/' className='back-btn'>Go Back</NavLink>
            </div>
          </div>
        </section>  
        </div>
    )
  
}

export default SingleMovie