const btnCityDelete = document.getElementById('delete-city-btn');

getCityId();

btnCityDelete.addEventListener('click', (e)=>{
    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let cityId = sessionStorage.getItem("cityId");

    deleteLocations(jwt, 'cities', cityId);
})