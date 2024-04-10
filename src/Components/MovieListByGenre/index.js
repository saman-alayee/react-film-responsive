import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Helper/Api";
import Style from "./style";

export default function MovieListByGenre(props) {
  const { title, genre_id } = props;
  const [moviesData, setMoviesData] = useState({
    data: [],
  });
  const [loading, setLoading] = useState(false);
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = moviesData.data.length;

  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    try {
      setLoading(true);
      const response = await api.get(`genres/${genre_id}/movies`);
      setMoviesData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function renderFarm() {
    return moviesData.data.slice(curSlide, curSlide + 7).map(({ id, poster, title }) => {
      return (
        <li key={id}>
          <Link to={`/m/${id}`}>
            <div className="holder-img">
              <img src={poster} alt={title} />
              <div className="dark-overlay"></div>
            </div>
            <h3>{title}</h3>
          </Link>
        </li>
      );
    });
  }

  const slideLeft = () => {
    if (curSlide < maxSlide - 4) {
      setCurSlide(prevSlide => prevSlide + 1);
    }
  };

  const slideRight = () => {
    if (curSlide > 0) {
      setCurSlide(prevSlide => prevSlide - 1);
    }
  };

  return (
    <Style>
      <h2>{title}</h2>
      <div className="navigation-buttons">
        <button onClick={slideLeft}> next</button>
        <button onClick={slideRight}>previous</button>
      </div>
      {loading ? <p>Please wait a moment</p> : <ul className="list">{renderFarm()}</ul>}
    </Style>
  );
}
