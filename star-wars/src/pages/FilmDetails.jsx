import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

export default function FilmDetails() {
  const { id } = useParams();

  const [FilmData, setFilmData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.info/api/films/${id}`);
        const data = await response.json();
        setFilmData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });

  return (
    <>
      <h1>{FilmData.title}</h1>
      <p> {FilmData.director}</p>
      <button>
        <Link to="/">Go back to home page</Link>
      </button>
    </>
  );
}
