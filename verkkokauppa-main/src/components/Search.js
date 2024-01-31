import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.css";


export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = async () => {
    try {
      // Display an error message and prevent the search action
      if (searchTerm.trim() === "") {
        alert("Hakukenttä ei voi olla tyhjä!");
        return;
      }

      // Navigate to the search results page
      navigate(`/search-results?searchTerm=${searchTerm}`);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
  //If enter key is used in search field, invoke handleSearchClick(); function
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="search-box f_flex">
            <input
              type="text"
              placeholder="Etsi tuotteita"
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button
              className="searchButton"
              type="button"
              onClick={handleSearchClick}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="cart-icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};