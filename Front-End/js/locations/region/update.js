const inputRegionEdit = document.getElementById('regionEditInputName');
const formRegionEdit = document.getElementById('edit-region-form');

getRegionId()

formRegionEdit.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwtPre = JSON.parse(sessionStorage.getItem("jwt"));
    const jwt = jwtPre.token
    let regionId = sessionStorage.getItem("regionId");
    const body = `{"name": "${inputRegionEdit.value}"}`;

    updateLocations(jwt, 'regions', body, regionId);
})