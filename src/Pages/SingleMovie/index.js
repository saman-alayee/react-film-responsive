import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
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
    const {id:moveiId , poster , title:moveiTitle , plot, year, genres ,country,images ,imdb_rating, actors ,writer,type,director }= data
    return(
        <Style>
          <div className="movie-information">
            <div className="container">
              { loading ? <h1> please wait</h1> : <div className="holder-movie">
              <div className="row">
                 <div className="col-lg-6 col-md-6 sm-12">
                  <div className="poster">
                     <img className="poster-size" src={poster} alt={moveiTitle}/>
                  </div>
                  </div>
                  <div className="col-lg-6 col-md-6 sm-12">
                   <div className="details">
                    <h1 className="movei-name">{moveiTitle}</h1>
                    <h3> director : {director}</h3>
                    <h3> writer : {writer}</h3>
                    <h3>actors: {actors}</h3>
                    <h4>country :{country}</h4>
                    <h4> year : {year}</h4>
                    <div className=" gallery mt-20">
                      <img className="img-gallery" src={images[0]} alt={moveiTitle}/>
                      <img className="img-gallery" src={images[1]} alt={moveiTitle}/>
                      <img className="img-gallery" src={images[2]} alt={moveiTitle}/>
                    </div>
                    <div className="holder-coment">
                       <h5>imdb_rating : {imdb_rating}</h5>
                       <p> type: {type}</p>
                       <h3>genres : {genres}</h3>
                       <p>description: {plot}</p>
                    </div>
                  </div></div>
               </div>
               </div>}
            </div>
          </div>
        </Style>
    )
 }