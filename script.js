// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
   }).then(function () {
      console.log(listedPlanets);
   let randomPlanet = pickPlanet(listedPlanets);
   addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
   })

   let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
    
   form.addEventListener("submit", function(event) {
       event.preventDefault();
 
       let pilotInput = document.querySelector("input[name=pilotName]");
       let pilot = pilotInput.value;

       let copilotInput = document.querySelector("input[name=copilotName]");
       let copilot = copilotInput.value;

       let fuelInput = document.querySelector("input[name=fuelLevel]");
       let fuelLevel = Number(fuelInput).value;
       
       let cargoInput = document.querySelector("input[name=cargoLevel]");
       let cargoLevel = Number(cargoInput).value;
 
      formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    });
});

