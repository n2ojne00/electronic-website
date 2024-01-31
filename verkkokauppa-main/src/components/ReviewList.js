import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReviewList.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/palaute")
      .then((response) => {
        const sortedReviews = response.data.sort(
          (a, b) => new Date(b.submitted_at) - new Date(a.submitted_at)
        );
        setReviews(sortedReviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  return (
    <div style={styles.reviewListContainer}>
      <h3 style={styles.heading}>Kaikki arvostelut</h3>
      <ul style={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} style={styles.reviewItem}>
            <strong>{review.tuote}</strong>: {review.feedback} - <br></br>{" "}
            {review.submitted_at}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  reviewListContainer: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "16px",
  },
  reviewList: {
    listStyleType: "none",
    padding: 0,
  },
  reviewItem: {
    marginBottom: "8px",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
};

export default ReviewList;
