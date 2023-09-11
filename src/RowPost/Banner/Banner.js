import React, { useState } from 'react'
import "./Banner.css"
import {useEffect} from 'react';
import axios from "../../constants/axios.js";
import {API_KEY} from "../../constants/constants.js"
import {imgUrl} from "../../constants/constants.js";
function Banner() {
  const [movie,setMovie] = useState()
  const [showOverview, setShowOverview] = useState(true);

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    })
  },[])
  useEffect(() => {
    // Check the window size and toggle the showOverview state accordingly
    const handleWindowResize = () => {
      if (window.innerWidth <= 500) {
        setShowOverview(false);
      } else {
        setShowOverview(true);
      }
    }
    window.addEventListener('resize', handleWindowResize);

    // Initial check on component mount
    handleWindowResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return ( 
    <div style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path :""})`}} 
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            {showOverview && <h1 className='description'>{movie ? movie.overview : ''}</h1>}
        </div>
       < div className='fade'> </div>

    </div>
  )
}

export default Banner;
