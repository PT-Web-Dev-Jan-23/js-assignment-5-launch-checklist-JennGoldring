// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
   listedPlanets = result;
   }).then(function () {
    console.log(listedPlanets);
   
   
   //let missionTarget = document.getElementById("missionTarget");
   let randomPlanet = pickPlanet(listedPlanets);
   addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
   });

    let form = document.querySelector('form');
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    
    form.addEventListener('submit', function(event) {
       event.preventDefault();
 
       let pilotName = document.querySelector("input[name=pilotName]");
       let pilot = pilotName.value;

       let copilotName = document.querySelector("input[name=copilotName]");
       let copilot = copilotName.value;

       let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
       let fuelLevel = inputFuelLevel.value;
       
       let inputCargoLevel = document.querySelector("input[name=cargoLevel]");
       let cargoLevel = inputCargoLevel.value;
 
      formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    });
 

});
//Below this comment call the appropriate helper functions to pick a planet fom the list 
   //of planets and add that information to your destination.

   