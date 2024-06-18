import React from 'react';
import { Link } from 'react-router-dom';
import ThreeSixtyViewer from '../components/ThreeSixtyViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'; 

import backgroundImage from '../assets/decoo.jpg';

const Visitt = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };

  const buttonContainerStyle = {
    marginTop: '20px', 
    marginBottom: '20px', 
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%', 
  };

  const buttonStyle = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: 'orange', 
    border: '2px solid orange', 
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 20px',
    backgroundColor: 'transparent', 
  };

  return (
    <div style={containerStyle}>
      
      
      <ThreeSixtyViewer />
      <div style={buttonContainerStyle}>
        <Link to="/search" style={buttonStyle}>
          <span style={{ marginRight: '10px' }}>Retour à la recherche</span>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </Link>
      </div>
    </div>
  );
};

export default Visitt;
