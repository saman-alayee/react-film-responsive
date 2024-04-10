import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Helper/Api";
import Style from "./style";
import { Pagination } from "antd";
import { usePageTitle } from "../../Hooks/usePageTitle";

export default function Movies(){
    const title = usePageTitle("moviesList")
    const [loading, setLoading] = useState(false)
    const [data, setData ]= useState({
        data:[],
        metadata: {
            current_page: 1,
            per_page: 2,
            page_count: 25,
            total_count: 250
        }
    }); 

    useEffect(() => {
        getApi();
    }, []);

    async function getApi(page = "1") {
        try {
            setLoading(true)
            const response = await api.get(`movies?page=${page}`);
            setData(response.data);
            setLoading(false);
        } catch(e) {
            setLoading(false);
        }
    };

    function onChange(page, pageSize) {
         getApi(page);
    }

    function renderFarm(){
        return data.data.map(({id, title, poster})=> {
            return (
                <li key={id} className="col-lg-2 col-md-2 sm-12">
                    <Link to={`/m/${id}`}>
                        <div className="holder-img">
                            <img src={poster} />
                            <div className="dark-overlay"></div>
                        </div>
                        <h3>{title}</h3>
                    </Link>
                </li>
            );
        });
    }

    return(
        <Style>
              <div className="title">
           <h2> Movies</h2></div>
           {loading ? <p> Please wait a moment... </p> : <ul className="row list">{renderFarm()}</ul>}
           <Pagination defaultCurrent={1} defaultPageSize={10} total={data.metadata.total_count} showSizeChanger={false} onChange={onChange}/>
        </Style>
    )
}
