import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import './Movies.css';
import { queries } from '@testing-library/react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MovieRecommendations = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        {
          params: {
            api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
          },
        }
      );
      setGenres(response.data.genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
          params: {
            api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
            sort_by: sortBy,
            page: 1,
            with_genres: selectedGenre,
            query: searchQuery,
          },
        }
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [searchQuery, sortBy, selectedGenre]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSearchSubmit = async () => {
    if(searchQuery!==""){
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
          query: searchQuery,
        },
      }
    );
    setMovies(response.data.results);
  }
}
  const Keydown = async (e) => {
    if(searchQuery!=="" && e.key ==="Enter"){
     const response = await axios.get(
       'https://api.themoviedb.org/3/search/movie',
       {
         params: {
           api_key: '0fa2853e7c4d6c8f146aba861c5e4a06',
           query: searchQuery,
         },
       }
     );
     setMovies(response.data.results);
   };
   }
  return (
    <div className='contents'>
      <div className="search-bar">
        <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchChange} 
        onKeyDown={Keydown} className='search-input'/>
        <button onClick={handleSearchSubmit} className="search-button">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="filters">
        <label htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
        </select>
        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="movie-wrapper">
        {!movies ? <h2>!Not Found</h2>: movies.map((movie) => (
          <div key={movie.id} className="movie" onClick={()=>navigate(`/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
                 <p className='rating'>Release-Date: {movie.release_date}</p>
                 <p className='rating'>Language: {movie.original_language}</p>
                 <p className='rating'>Rating: {movie.vote_average}</p>
            <button className='read-more'>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendations;