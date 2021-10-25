function displayISSCoords() {
   fetch("https://api.wheretheiss.at/v1/satellites/25544") // fetch ISS position with a GET request to the API 
      .then(res => res.json()) // convert response data to JSON
      .then(ISSdata => { // display ISS latitude and longitude in the DOM
         document.getElementById("iss_lat").innerHTML = ISSdata.latitude;
         document.getElementById("iss_lon").innerHTML = ISSdata.longitude;
      })
      .catch(err => console.error(err)); // if an error occurres at any step, print it to the console
}

// update displayed coordinates every 2 seconds
setInterval(displayISSCoords, 2000);