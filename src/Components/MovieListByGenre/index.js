import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Helper/Api";
import Style from "./style";

 export default function MovieListByGenre(props){
    const{ title , genre_id}= props;
    const [moviesData, setMoviesData] =useState({
        data:[],
    });
    const [loading, setLoading]= useState (false);
    useEffect(()=>{
        getApi();
    }, [])
    async function getApi(){
        try{
            setLoading(true);
            const response = await api.get(`genres/${genre_id}/movies`);
            setMoviesData(response.data)
            setLoading(false)
        } catch(e){
          setLoading(false);
        }
    }
    function renderFarm(){
        return moviesData.data.slice(0 , 7).map(({id, poster, title})=>{
            return(
                <li key={id}>
                    <Link to={`/m/${id}`}>
                    <div className="holder-img">
                        <img src={poster}/>
                        <div className="dark-overlay"></div>
                        </div>
                    <h3>{title}</h3>
                    </Link>
                </li>
            )
        })
    }
    return(
        <Style>
          <h2>{title}</h2>
          {loading ? <p> please waite a moment </p> : <ul className="list">{renderFarm()}</ul>}
        </Style>
    )
 }