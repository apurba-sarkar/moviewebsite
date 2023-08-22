import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "./context";
import "./search.css"

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id)

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  // const [isError, setIsError] = useState({ show: "false", message: "" });
  // const [query, setQuery] = useState("titanic");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${url}&i=${id}`);
      console.log(`${url}&i=${id}`)
    }, 800);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div >
        <div>Loading...</div>
      </div>
    );
  }
  return (
    
      <section>
        <div  style={{backgroundColor:"green"}}>
          <figure src={movie.Poster} alt=""></figure>
        </div>
      </section>
  
  );
};

export default SingleMovie;
