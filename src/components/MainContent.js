import React, {useState, useEffect} from 'react';
// import Fetch from '../utils/fetch.js';
import RouteOptions from './RouteOptions';
import DirectionOptions from './DirectionOptions';
import StopsList from './StopsList';
const axios = require('axios');

const MainContent = () => {
  const [metroRoutes, setRoutes] = useState([])
  const [directions, setDirections] = useState([])
  const [stops, setStops] = useState([])
  const [selectedRoute, setSelectedRoute] = useState("Select a Route")
  // const [selectedDirection, setSelectedDirection] = useState("")
  // useEffect(()=>setRoutes(Fetch.getRoutes()),[])
  useEffect(()=>{axios.get('https://svc.metrotransit.org/nextripv2/routes').then(res => setRoutes(res.data)).catch(err=> `${err.message} CANNOT GET ROUTES`)}, [])

  const getDirections = (routeId) => {
     axios.get(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`).then(res=> {console.log(res.data, 'DIRECTIONSSSSSS'); return setDirections(res.data)}).catch(err=> console.log(`${err.message} CANNOT GET DIRECTIONS`))
  }

  // const getStops = (routeId, directionId) => {
  //   axios.get(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`).then(res=> setStops(res.data)).catch(err=> `${err.message} CANNOT GET TOPS`)
  // }

//   const getDirId = (e) => {
// 
//     // return e
//   }
 return(
   <div className="mainContent">
     {/* <h1> Main content </h1> */}
     <form>
       <RouteOptions metroRoutes={metroRoutes} getDirections={getDirections} setSelectedRoute={setSelectedRoute} selectedRoute={selectedRoute} />
       {selectedRoute.length > 0 && <DirectionOptions/>}
     </form>
     {/* <div>
      <StopsList/> 
     </div> */}
   </div>
 )
}

export default MainContent;