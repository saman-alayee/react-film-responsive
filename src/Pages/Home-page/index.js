
import HeroSection from "../../Components/HeroSection";
import MovieListByGenre from "../../Components/MovieListByGenre";

export default function Homepage (){
 return(
      <>
      <HeroSection/>
      <MovieListByGenre title= "crime" genre_id="1"/>
      <MovieListByGenre title=" drama" genre_id="2"/>
      <MovieListByGenre title=" action" genre_id="3"/>
      <MovieListByGenre title=" Animation" genre_id="15"/>
      <MovieListByGenre title=" Romance" genre_id="16"/>
      <MovieListByGenre title=" History" genre_id="5"/>
      <MovieListByGenre title=" Comedy" genre_id="9"/>
      <MovieListByGenre title=" family" genre_id="13"/>
      </>
   
 )
}