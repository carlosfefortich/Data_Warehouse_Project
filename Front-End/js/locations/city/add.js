const inputCityAdd = document.getElementById('cityAddInputName');
const formCityAdd = document.getElementById('add-city-form');

getCityId();

console.log(inputCityAdd.value);

formCityAdd.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let countryId = sessionStorage.getItem("countryId");
    const body = `{"name": "${inputCityAdd.value}", "countryId": "${countryId}" }`;


    createCountriesCities(jwt, 'cities', body);
})