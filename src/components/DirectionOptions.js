import React from 'react';
import DropdownBox from './DropdownBox';

const DirectionOptions = ({metroDirections}) =>{
  const directions = metroDirections.map(({direction_name, direction_id})=> [direction_name, direction_id])
  console.log(metroDirections)
 return(
   <DropdownBox dataList={directions} dataType="Directions" title="directions"/>
 )
}

export default DirectionOptions;