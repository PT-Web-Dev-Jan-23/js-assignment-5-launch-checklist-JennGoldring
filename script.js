// Write your JavaScript code here!

window.addEventListener("load", function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
       event.preventDefault();
 
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
 
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
          alert("All fields are required!");
       } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
          alert("Please enter string for pilot and number for fuel and cargo.");
       } else {
          let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility = "hidden";
          let launchStatus = document.getElementById("launchStatus");
 
          document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
          document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
 
          if (fuelLevel.value < 10000) {
             faultyItems.style.visibility = "visible";
             document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch.";
             launchStatus.innerHTML = "Shuttle not ready for launch.";
             launchStatus.style.color = "red";
          } else if (cargoMass.value > 10000) {
             faultyItems.style.visibility = "visible";
             document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch.";
             launchStatus.innerHTML = "Shuttle not ready for launch.";
             launchStatus.style.color = "red";
          } else {
             faultyItems.style.visibility = "hidden";
             launchStatus.innerHTML = "Shuttle is ready for launch.";
             launchStatus.style.color = "green";
          }
       }
    });
 
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
       response.json().then(function (json) {
          let missionTarget = document.getElementById("missionTarget");
          let randomPlanet = pickPlanet(json);
          addDestinationInfo(missionTarget, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
       });
    });
 });
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
 function addDestinationInfo(target, name, diameter, star, distance, moons, image) {
    target.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
          <li>Name: ${name}</li>
          <li>Diameter: ${diameter}</li>
          <li>Star: ${star}</li>
          <li>Distance from Earth: ${distance}</li>
          <li>Number of Moons: ${moons}</li>
       </ol>
       <img src="${image}">
    `;
 }
//  let listedPlanets;
// // Set listedPlanetsResponse equal to the value returned by calling myFetch()
// let listedPlanetsResponse;
// listedPlanetsResponse.then(function (result) {
//     listedPlanets = result;
//     console.log(listedPlanets);
// }).then(function () {
//     console.log(listedPlanets);
//     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
// })
let listedPlanetsResponse = fetch();
listedPlanetsResponse.then(function (result) {
let listedPlanets = result;
let missionTarget = document.getElementById("missionTarget");
let randomPlanet = pickPlanet(listedPlanets);

});
