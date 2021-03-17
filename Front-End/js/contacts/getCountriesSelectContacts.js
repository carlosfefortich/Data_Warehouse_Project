const contactAddSelectRegion = document.getElementById('contactAddSelectRegion');
const contactEditSelectRegion = document.getElementById('contactEditSelectRegion');

contactAddSelectRegion.addEventListener('change', (e)=>{
    const contactAddSelectCountry = document.getElementById('contactAddSelectCountry');
    console.log('Valor region ', e.target.value);
    getRegionIdContact();
    
    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let regionId = e.target.value;
    console.log(regionId);

    fetch(`http://localhost:3000/locations/countries/${regionId}`, {
        method: 'GET',
        headers:{
            "Authorization": "Bearer " + jwt.token
        }
    }).then((response)=>{
        if(response.status == 200){
            response.json().then((data)=>{
                console.log(data);
                let countries = data.countries;

                countries.forEach(country => {
                    var optionCountryName = document.createElement('option');

                    optionCountryName.value = country.id;
                    optionCountryName.dataset.countryId = country.id;

                    optionCountryName.innerHTML = country.name;

                    contactAddSelectCountry.appendChild(optionCountryName);
                });
            })
        }
    })
})

contactEditSelectRegion.addEventListener('change', ()=>{
    const contactEditSelectCountry = document.getElementById('contactEditSelectCountry');
    getRegionIdContact();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let regionId = sessionStorage.getItem("regionId");

    fetch(`http://localhost:3000/locations/countries/${regionId}`, {
        method: 'GET',
        headers:{
            "Authorization": "Bearer " + jwt.token
        }
    }).then((response)=>{
        if(response.status == 200){
            response.json().then((data)=>{
                console.log(data);
                let countries = data.countries;

                countries.forEach(country => {
                    var optionCountryName = document.createElement('option');

                    optionCountryName.value = country.id;
                    optionCountryName.dataset.countryId = country.id;

                    optionCountryName.innerHTML = country.name;

                    contactEditSelectCountry.appendChild(optionCountryName);
                });
            })
        }
    })
})