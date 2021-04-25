//fetch routes => parse json into form you want which is a list of routes using axios, shape the data comes in aka a module to perform these. All are gets operations.
//then get the routes using the function you already created

class MetroTransit(){ with axios and get 
  routes // "https://svc.metrotransit.org/nextripv2/routes"
  directions(routeId) //to directions use "https://svc.metrotransit.org/nextripv2/directions/:routeId"
  stops(routeId, dirId)// "https://svc.metrotransit.org/nextripv2/stops/20/0"
}

export this, import into component that needs it


//should have routes then once selected: upon page load: "https://svc.metrotransit.org/nextripv2/routes"

//display and get directions then once that's selected

//display stops once stop is selected then display time etc. 


/*******FEATURES*********/
/* 
1) display routes dropdown only
when select, should fetch directions and display directions dropdown

2) direction dropdown only displayed when route selected
once direction selected then display stops content

3) stops content box displayed when both avail

4) Routing

5) Testing

6) 

*/

//look tailwind
//make sure metroTransit function works for all three
//get css in with tailwind for display
//get 

install and build out some of the ui