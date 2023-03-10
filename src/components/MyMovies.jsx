import { Card, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import { ListGroup, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MyMovies = (props) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMovies = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_BE_DEV_URL + "/medias");
      if (response.ok) {
        console.log(response)
        let data = await response.json();
        console.log(data);
        setMovies(data)
        setLoading(false)
      } else {
        setLoading(false)
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
    }
  };

  useEffect(() => {
    fetchMovies()
  }, [])


  return (
    <>
      {loading && (
        <Spinner animation="border" variant="success" />
      )}
      {error && (
        <Alert variant="danger">ERROR! LEAVE THE SHIP IMMEDIATELY!</Alert>
      )}
      <div className="d-flex mt-3 mx-5">
        <h2 className="mx-3 text-white mr-auto"></h2>
      </div>

      <Row className="d-flex justify-content-center mx-3">
        {movies?.map((movie) => {
          return (
            <Link to={"/movie-details/" + movie.imdbID}>
              <img
                key={movie.imdbID}
                className="image-fix mx-1"
                variant="top"
                src={movie.poster}
              />
            </Link>
          );
        })}
      </Row>
    </>
  );
}

export default MyMovies;
