import { useEffect, useState } from "react";
import Style from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const req = await axios("https://moviesapi.ir/api/v1/movies?page={2}");
      setHeroData(req.data.data.slice(0, 5));
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const heroImgClass = [
    "hero-img1",
    "hero-img2",
    "hero-img3",
    "hero-img4",
    "hero-img5",
  ];

  return (
    <Style>
      <div className="hero-container">
        {heroData.map((item, index) => (
          <Link
            to={`/m/${item.id}`}
            key={item.id}
            className={`${heroImgClass[index]} hero-img`}
            style={{ backgroundImage: `url(${item.poster})` }}
          />
        ))}
      </div>
    </Style>
  );
}
