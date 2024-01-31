import React from 'react';
import { useNavigate } from 'react-router-dom';

const LastPageButton = ({ lastPageNumber }) => {
  const navigate = useNavigate();

  const navigateToLastPage = () => {
    const lastPageUrl = `/page/${lastPageNumber}`;
    navigate(lastPageUrl);
  };

  return (
    <button onClick={navigateToLastPage}>
      Go to Last Page
    </button>
  );
};