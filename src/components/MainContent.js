import React from 'react';
import Dropdown from './Dropdown';
import StopsList from './StopsList';

const MainContent = () =>{
 return(
   <div className="mainContent">
     <h1> Main content </h1>
     <form>
       <Dropdown/>
       <Dropdown/>
       <Dropdown/>
     </form>
     <div>
      <StopsList/> 
     </div>
   </div>
 )
}

export default MainContent;