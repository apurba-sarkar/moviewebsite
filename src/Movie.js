import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movie = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <section className="">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" ,columnGap:"40px"}}>
          {movie && movie.map((e) => {

            const movieName = e.Title.substring(0,15)
            return (
              <NavLink to={`movie/${e.imdbID}`} key={e.imdbID}>
                <div>
                  <div>
                    <h2>Title: </h2>
                    {e.Title.length>15 ? `${movieName}...`  : movieName }
                    
                  </div>
                </div>
                <div>
                  <img src={e.Poster} alt={e.imd} />
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movie;
