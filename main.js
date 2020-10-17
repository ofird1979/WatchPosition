navigator.geolocation.watchPosition(
    position => document.getElementById("position").innerHTML = `lat: ${position.coords.latitude} <br> lng: ${position.coords.longitude}`,
    err => alert(err.message));