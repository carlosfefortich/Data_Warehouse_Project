const btnCountryDelete = document.getElementById('delete-country-btn');

getCountryId();

btnCountryDelete.addEventListener('click', ()=>{
    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let countryId = sessionStorage.getItem("countryId");

    deleteLocations(jwt, 'countries', countryId);
})