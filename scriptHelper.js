// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
             <ol>
                 <li>Name: ${name}</li>
                 <li>Diameter: ${diameter}</li>
                 <li>Star: ${star}</li>
                 <li>Distance from Earth: ${distance} </li>
                  <li>Number of Moons: ${moons}</li>
             </ol>
             <img src= '${imageUrl}'>
`
}
//I had a function in here twice

function validateInput(testInput) {
    if (testInput === "") {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
 }
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // event.preventDefault();
    //DOM Elements
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

// pilot and copilot are strings and all fields have info
   if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert ("All fields are required!"); 
    return;
   }
   if (!isNaN(pilot) || !isNaN(copilot)) {
    alert ("Pilot and Co-pilot names should be strings!");
    return;
   }

   // fuel level and cargo mass are numbers
   if(isNaN(fuelLevel) || isNaN(cargoLevel)) {
    alert ("Fuel level and cargo mass should be numbers!");
    return;
   }
  // event.preventDefault();
}
//fetches list of planets
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        console.log(response);
        return response.json();
    });
    
    console.log(planetsReturned);
    return planetsReturned;
}
// Picks a random planet from a list of planets
function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
  }
   
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;