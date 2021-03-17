const inputCountryAdd = document.getElementById('countryAddInputName');
const formCountryAdd = document.getElementById('add-country-form');

getRegionId();

formCountryAdd.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let regionId = sessionStorage.getItem("regionId");
    const body = `{"name": "${inputCountryAdd.value}", "regionId": "${regionId}" }`;


    createCountriesCities(jwt, 'countries', body, regionId);
})