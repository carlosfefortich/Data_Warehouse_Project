const btnNewCompany = document.getElementById('new-company-btn');

const getCities = (elementId) =>{
    let selectAddCompany = document.getElementById(elementId);


    let jwt = JSON.parse(sessionStorage.getItem("jwt"));


    if(jwt != null){
        fetch('http://localhost:3000/locations/cities/', {
            method: 'GET',
            headers:{
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status == 200){
                response.json().then((data)=>{

                    const cities = data.cities;

                    cities.forEach(city => {

                        //creating elements
                        var optionCityName = document.createElement('option');

                        //adding attributes to elements
                        optionCityName.value = city.id;
                        optionCityName.dataset.cityId = city.id;

                        //adding content to elements
                        optionCityName.innerHTML = city.name;

                        //organizing elements
                        selectAddCompany.appendChild(optionCityName);

                    });
                })
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", getCities('add-company-select'));
document.addEventListener("DOMContentLoaded", getCities('edit-company-select'));