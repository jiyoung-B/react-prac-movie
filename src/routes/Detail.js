import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const detail = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
       setMovieDetail(json.data.movie)
       setLoading(false);

      };
      useEffect(() => {
        detail();
      },[]);
    return (
    <div>
      {loading ? (<strong>Loading...</strong>) : (<div>
      <h1>movie detail</h1>
      <img src={movieDetail.medium_cover_image}/>
      <h1>{movieDetail.title}</h1>
      <div>year : {movieDetail.year}</div>
      <div>rating : {movieDetail.rating}</div>
      <ul>genres : {movieDetail.genres.map((g) => (<li key={g}>{g}</li>))}</ul>
      <p>{movieDetail.description_intro}</p>
      <p>{movieDetail.description_full}</p>
      </div>)
      }
    </div>
      )
  

}

export default Detail;