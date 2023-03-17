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
            `;
}
 
function validateInput(testInput) {
    let numberInput = Number (testInput);
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(numberInput)) {
        return "Not a Number";
    }
    else if (!isNaN(numberInput)) 
    {
    return 'Is a Number';
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //DOM Elements
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
  
// pilot and copilot are strings and all fields have info
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert ("All fields are required!"); 
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert ("Enter valid information for each field!");
   } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = 'Pilot ${pilot} is ready for launch';
    copilotStatus.innerHTML = 'Copilot ${copilot} is ready for launch';
    let launchStatus = document.getElementByID("launchStatus");

if (fuelLevel < 10000 && cargoLevel <= 10000 ) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";

} else if (fuelLevel < 10000 && cargoLevel.value > 10000) {
    cargoStatus.innerHTML = "Cargo mass too high for launch.";
    fuelLevel.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";

} else if (fuelLevel >= 10000 && cargoLevel.value > 10000) {
    cargoStatus.innerHTML = "Cargo mass too high for launch.";
    fuelLevel.innerHTML = "Fuel level good for launch";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";

} else {
    fuelLevel.innerHTML = "Fuel level good for launch"
    cargoStatus.innerHTML = "Cargo mass good for launch"
    launchStatus.innerHTML = "Shuttle is ready for launch.";
    launchStatus.style.color = "green";
        }
    }
 }

//fetches list of planets
async function myFetch() {
    let planetsReturned; 
    
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
});

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