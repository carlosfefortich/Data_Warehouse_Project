const inputRegionAdd = document.getElementById('regionAddInputName');
const formAddRegion = document.getElementById('add-region-form');

formAddRegion.addEventListener('submit', (e)=>{
    e.preventDefault();
    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token
    const body = `{"name": "${inputRegionAdd.value}"}`;

    createRegions(jwt, 'regions', body);
})