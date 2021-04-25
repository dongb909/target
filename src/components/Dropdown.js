import React from 'react';

const Dropdown = () =>{
 return(
   <div className="Dropdown">This is the Dropdown
     <label htmlFor="cars">Choose a car:</label>
       <select name="cars" id="cars">
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="mercedes">Mercedes</option>
         <option value="audi">Audi</option>
       </select>
   </div>
 )
}

export default Dropdown