import React from 'react';
import DropdownBox from './DropdownBox';

const RouteOptions = ({metroRoutes, getDirections, setSelectedRoute, selectedRoute}) =>{
  const routeNames = metroRoutes.map(({route_label, route_id})=> [route_label, route_id])
  console.log(metroRoutes)
 //  const getRouteId =(e) => {
 //   const selectedId = e.target.val
 //   getDirections(selectedId)
 // }
 return(
   <DropdownBox dataList={routeNames} dataType="Routes" title="route" getData={getDirections} setSelected={setSelectedRoute} selectedItem={selectedRoute}/>
 )
}

export default RouteOptions;