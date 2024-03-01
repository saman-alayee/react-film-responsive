import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../Helper/Api";
import Style from "./style";

 export default function SingleMovie(){
    const {id} = useParams();
    const [data, setdata] =useState({
        id: 1,
title: "",
poster: "",
year: "",
rated: "",
released: "",
runtime: "",
director: "",
actors: "",
plot: "",
country: "",
awards: "",
metascore: "",
imdb_rating: "",
imdb_votes: "",
imdb_id: "",
type: "",
genres: [
"",
""
],
images: [

]
    });
    const [loading, setLoading]= useState (false);
    useEffect(()=>{
        getApi();
    }, [])
    async function getApi(){
        try{
            setLoading(true);
            const response = await api.get(`movies/${id}`);
            setdata(response.data)
            setLoading(false)
        } catch(e){
          setLoading(false);
        }
    }
    const {id:moveiId , poster , title:moveiTitle , plot, year, genres ,country,images ,imdb_rating, actors  }= data
    return(
        <Style>
          <div className="movie-information">
            <div className="container">
              { loading ? <div> vaysaaaa alan miaaad</div> : <div className="holder-movie">
                  <div className="poster">
                     <img className="poster-size" src={poster} alt={moveiTitle}/>
                  </div>
                   <div className="detailes">
                    <h1>{moveiTitle}</h1>
                    <h3>country :{country}</h3>
                    <h3>genres :{genres}</h3>
                    <h5>imdb_rating: {imdb_rating}</h5>
                    <h6> year: {year}</h6>
                    <span>actors: {actors}</span>
                    <p>{plot}</p>
                    <div className="container gallery">
                      <img className="img-gallery" src={images[0]} alt={moveiTitle}/>
                      <img className="img-gallery" src={images[1]} alt={moveiTitle}/>
                      <img className="img-gallery" src={images[2]} alt={moveiTitle}/>
                    </div>
                  </div>
               </div>}
            </div>
          </div>
        </Style>
    )
 }