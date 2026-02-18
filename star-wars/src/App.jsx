import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function App() {
  const [FilmData, setFilmData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.info/api/films`);
        const data = await response.json();
        setFilmData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });

  return (
    <div className="content-center w">
      <div className="grid grid-cols-3 gap-3">
        {FilmData.map((item, index) => (
          <button>
            <Link to={`/FilmDetails/${index + 1}`}>{item.title}</Link>
          </button>
        ))}
      </div>
    </div>
  );
}
