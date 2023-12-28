import React from 'react';
import { useNavigate } from 'react-router-dom';

function SavedList(props) {
  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  // Function to handle navigation back to the home page
  const navigateToHome = () => {
    // Use the navigate function to navigate to the home route
    navigate('/');
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie" key={movie.title}>
          {movie.title}
        </span>
      ))}
      {/* Attach onClick event to call navigateToHome when the Home button is clicked */}
      <div className="home-button" onClick={navigateToHome}>
        Home
      </div>
    </div>
  );
}

export default SavedList;
