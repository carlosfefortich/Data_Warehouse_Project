const getRegionsContacts = (elementId) =>{
    let selectRegion = document.getElementById(elementId);

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));

    if(jwt != null){

        fetch('http://localhost:3000/locations/regions/', {
            method: 'GET',
            headers:{
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status == 200){
                response.json().then((data)=>{
                    const regionsContacts = data.regions;

                    regionsContacts.forEach(region => {
                        var optionRegionName = document.createElement('option');

                        optionRegionName.value = region.id;
                        optionRegionName.dataset.regionId = region.id;

                        optionRegionName.innerHTML = region.name;

                        selectRegion.appendChild(optionRegionName);
                    });
                })
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", getRegionsContacts('contactAddSelectRegion'));
document.addEventListener("DOMContentLoaded", getRegionsContacts('contactEditSelectRegion'));