import React,{useState,useEffect} from 'react';
import Youtube from "react-youtube";
import "./RowPost.css";
import axios from '../constants/axios';
import {imgUrl,API_KEY} from "../constants/constants.js"

function RowPost(props) {
    const [movies,setMovies] = useState([]);
    const [urlid,seturlid]=useState('')
    useEffect(()=>
    {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
        setMovies(response.data.results).catch(err=>{
            alert('network error');
        });   
          
        })
    })
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };  
      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0)
            {
                seturlid(response.data.results[0])
            }
            else{
                console.log("array empty");
            }
        })


      }  
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                <img onClick={(()=>handleMovie(obj.id))}className={props.isSmall ? 'smallposter':'poster'} alt ='poster' src={`${imgUrl+obj.backdrop_path}`}></img>
                 )}
               
       
                
            </div>
            { urlid && <Youtube opts={opts} videoId={urlid.key} />}
        </div>
      );
}

export default RowPost;