const inputCityEdit = document.getElementById('cityEditInputName');
const formCityEdit = document.getElementById('edit-city-form');

getCityId();

formCityEdit.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let cityId = sessionStorage.getItem("cityId");
    const body = `{ "name": "${inputCityEdit.value}" }`;

    updateLocations(jwt, 'cities', body, cityId);
})