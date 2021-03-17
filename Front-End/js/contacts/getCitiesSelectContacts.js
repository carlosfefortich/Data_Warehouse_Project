const contactAddSelectCountry = document.getElementById('contactAddSelectCountry');
const contactEditSelectCountry = document.getElementById('contactEditSelectCountry');

contactAddSelectCountry.addEventListener('change', (e)=>{
    const contactAddSelectCity = document.getElementById('contactAddSelectCity');

    getCountryIdContact();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let countryId = e.target.value;

    fetch(`http://localhost:3000/locations/cities/${countryId}`, {
        method: 'GET',
        headers:{
            "Authorization": "Bearer " + jwt.token
        }
    }).then((response)=>{
        if(response.status == 200){
            response.json().then((data)=>{
                console.log(data);
                let cities = data.cities;

                cities.forEach(city => {
                    var optionCityName = document.createElement('option');

                    optionCityName.value = city.id;
                    optionCityName.dataset.cityId = city.id;

                    optionCityName.innerHTML = city.name;

                    contactAddSelectCity.appendChild(optionCityName);
                });
            })
        }
    })
})

contactEditSelectCountry.addEventListener('change', (e)=>{
    const contactEditSelectCity = document.getElementById('contactEditSelectCity');

    getCountryIdContact();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let countryId = e.target.value;
    console.log(countryId);

    fetch(`http://localhost:3000/locations/cities/${countryId}`, {
        method: 'GET',
        headers:{
            "Authorization": "Bearer " + jwt.token
        }
    }).then((response)=>{
        if(response.status == 200){
            response.json().then((data)=>{
                console.log(data);
                let cities = data.cities;

                cities.forEach(city => {
                    var optionCityName = document.createElement('option');

                    optionCityName.value = city.id;
                    optionCityName.dataset.cityId = city.id;

                    optionCityName.innerHTML = city.name;

                    contactEditSelectCity.appendChild(optionCityName);
                });
            })
        }
    })
})