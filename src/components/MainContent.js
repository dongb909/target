import React, {useState, useEffect} from 'react';
import Fetch from '../utils/fetch.js';
import RouteOptions from './RouteOptions'
import StopsList from './StopsList';

const MainContent = () =>{
  const routesList = useEffect(()=>Fetch.getRoutes(),[])
 return(
   <div className="mainContent">
     <h1> Main content </h1>
     <form>
       <RouteOptions dataList={routesList}/>
       {/* <Dropdown/>
       <Dropdown/> */}
     </form>
     <div>
      <StopsList/> 
     </div>
   </div>
 )
}

export default MainContent;