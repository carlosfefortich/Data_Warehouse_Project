const inputCountryEdit = document.getElementById('countryEditInputName');
const formCountryEdit = document.getElementById('edit-country-form');

getCountryId();

formCountryEdit.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let countryId = sessionStorage.getItem("countryId");
    const body = `{ "name": "${inputCountryEdit.value}" }`;

    updateLocations(jwt, 'countries', body, countryId);
})