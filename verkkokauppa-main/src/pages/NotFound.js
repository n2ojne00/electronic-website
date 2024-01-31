import React from 'react'
import "./notfound.css";
import Button from 'react-bootstrap/Button';

export const NotFound = () => {
  return (
    <div className="not-found-container">
    <h1>404 NOT FOUND</h1>
    <iframe
      src="https://giphy.com/embed/utmZFnsMhUHqU"
      width="480"
      height="319"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
      title="Giphy"
    ></iframe>
    <p>
      <a href="https://giphy.com/gifs/utmZFnsMhUHqU">via GIPHY</a>
    </p>
    <Button className='homebutton' href="/" variant="success">
      Go Home
    </Button>
  </div>
);
};
