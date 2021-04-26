const axios = require('axios');

class Fetch { //with axios and get 
  constructor(){
    this.site = "https://svc.metrotransit.org/nextripv2/"
  }

  getRoutes(){
     axios.get(`${this.site}routes`).then(res => res.data).catch(err=> `${err.message} CANNOT GET ROUTES`)
  }

  getDirections(routeId){
    axios.get(`${this.site}directions/${routeId}`).then(res=> res.data).catch(err=> console.log(`${err.message} CANNOT GET DIRECTIONS`))
  }

  getStops(routeId, directionId){
    axios.get(`${this.site}stops/${routeId}/${directionId}`).then(res=> res.data).catch(err=> `${err.message} CANNOT GET TOPS`)
  }

}

export default new Fetch();

/*******FEATURES*********/
/* 
1) display routes dropdown only
when select, should fetch directions and display directions dropdown
each function: 1 sentence of what input it takes in and what it returns in what form or what it means. 

2) direction dropdown only displayed when route selected
once direction selected then display stops content

3) stops content box displayed when both avail

4) Routing

5) Testing: if ui works, if display 0 stops, all stops, 
-unit test: code and functions, undefined, 
-front-end site test: speed load, 

6) README
goal of app, purpose, how structure like high lever components, what each folder consist of/do, anything about the UI that's usesul like it's modbile first, or any features you want to talk about. goal and purpose is just restating the question /descr of what they gave you. sum it up. how to use it. and what it offers. 

7) prepare how to add in the time and stuff if want to expand the app to include what the site does currently to make it work.

*/

//look tailwind
//make sure metroTransit function works for all three
//get css in with tailwind for display
//get 

// install and build out some of the ui