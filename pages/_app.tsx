import "../styles/globals.scss"
import {useState,useEffect} from 'react';
import flagsmith from 'flagsmith'
import Navbar from '../components/Navbar'
import Debug from '../components/Debug'

// _app wraps the entire application
function MyApp({ Component, pageProps }) {
    // simple function to update the app
    const [_, update] = useState(0);
    const updateApp = ()=> update(Date.now());
 
 useEffect(()=>{
  flagsmith.init({
    environmentID: "NowEDzKzNJXZVTVanLVdMQ",
    onChange: ()=> {
      updateApp()
    }
  })
 },[])
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="container">
        <Component {...pageProps} />
      </div>
       <Debug/>
    </div>
  )
}

export default MyApp;