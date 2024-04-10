
import Button_hero from "../../Components/Button";
import Banner from "../../Components/Banner";
import HeroSection from "../../Components/HeroSection";
import MovieListByGenre from "../../Components/MovieListByGenre";
import { usePageTitle } from "../../Hooks/usePageTitle";

export default function Homepage (){
     const title = usePageTitle("HomePage")
 return(
      <>
      <HeroSection/>
      <Button_hero/>
      <MovieListByGenre title=" Action" genre_id="3"/>
      <MovieListByGenre title=" Drama" genre_id="2"/>
      <MovieListByGenre title=" Animation" genre_id="15"/>
      <Banner/>
      <MovieListByGenre title=" Romance" genre_id="16"/>
      <MovieListByGenre title= "Crime" genre_id="1"/>
      <MovieListByGenre title=" History" genre_id="5"/>
      <Banner/>
      <MovieListByGenre title=" Comedy" genre_id="9"/>
      <MovieListByGenre title=" Family" genre_id="13"/>
      </>
   
 )
}