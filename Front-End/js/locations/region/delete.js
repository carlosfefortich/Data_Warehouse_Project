const btnRegionDelete = document.getElementById('delete-region-btn');

getRegionId();

btnRegionDelete.addEventListener('click', ()=>{
    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token;
    let regionId = sessionStorage.getItem("regionId");

    deleteLocations(jwt, 'regions', regionId);
});