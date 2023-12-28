import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies')
        .then(response => {
          setMovies(response.data); // Set the response data as the 'movies' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    setSaved([...saved, id]);
  };

  return (
   
      <div>
      <SavedList list={[ /* This is stretch */]} />

      <Routes> <Route
         
          path="/"
          render={() => <MovieList movies={movies} addToSavedList={addToSavedList} />}
        />

        {/* Route for the Movie component with dynamic id parameter */}
        <Route
          path="/movies/:id"
          render={props => <Movie {...props} movies={movies} addToSavedList={addToSavedList} />}
        /></Routes>
    </div>
  );
}
