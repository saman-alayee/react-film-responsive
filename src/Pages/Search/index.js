import { useState } from "react";
import Style from "./style";
import api from "../../Helper/Api";
import { Link } from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchParams, createSearchParams } from "react-router-dom";

export default function Search(){
    const [loading , setLoading] = useState(false);
    const [data , setData] =useState ({data:[]});
    const [searchParams, setSearchParams] = useSearchParams();
    const onType =  async (event)=>{
        console.log(event.target.value);
     try{
        setLoading(true);
        const response =  await api.get("movies" , {
          params: {
          q:event.target.value,
        },
    });
    setSearchParams(createSearchParams({ q:event.target.value}));
    setData(response.data);
        setLoading(false);
     } catch(e){
        setLoading(false);
     }
    };
    function renderFarm(){
       return data.data.map(function ({id, poster, title }){
        return(
            <li key={id}>
             <Link to={`/m/${id}`}>
             <img src={poster}/>
             <h3>{title}</h3>
             </Link>
            </li>
        );
       });
    }
    return(
        <Style>
        <div className="input-container">
        <Input  onChange={onType} size="large" placeholder="please type here" prefix={<SearchOutlined />} />
        </div>
        <div>
         {(data.data.length == 0) ?(<h2>Search not found</h2>):( <ul className="list">{renderFarm()}</ul>)}
        </div>
        </Style>
    )
}