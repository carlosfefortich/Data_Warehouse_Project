const getAllLocations = () =>{
    const divLocationsContainer = document.getElementById('locations-container'); 
    
    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(jwt)
    if(jwt != null){
        fetch('http://localhost:3000/locations/all/', {
            method: 'GET',
            headers: { "Authorization": "Bearer " + jwt.token }
        }).then((response)=>{
            if(response.status == 200){

            
                response.json().then((data)=>{
                    data.forEach(location => {

                        const regionId = location.id;

                        //creating elements
                        var divAddRegion = document.createElement('div');
                        var divTreeContainer = document.createElement('div');
                        var divRegionActionsContainer = document.createElement('div');
                        var btnAddCountry = document.createElement('a');
                        var btnEditRegion = document.createElement('a');
                        var btnDeleteRegion = document.createElement('a');
                        var ulLocations = document.createElement('ul');
                        var divRegionContainer = document.createElement('div');
                        var liRegion = document.createElement('li');

                        //adding classes to elements
                        divAddRegion.classList.add('d-flex', 'justify-content-end', 'me-5');
                        divTreeContainer.classList.add('tree-container')
                        btnAddCountry.classList.add('btn', 'btn-primary', 'me-2');
                        btnEditRegion.classList.add('btn', 'btn-primary', 'me-2');
                        btnDeleteRegion.classList.add('btn', 'btn-primary');

                        //adding attributes to elements

                        btnAddCountry.dataset.regionId = regionId;
                        btnAddCountry.dataset.bsToggle = "modal";
                        btnAddCountry.dataset.bsTarget = "#addCountryModal";

                        btnEditRegion.dataset.regionId = regionId;
                        btnEditRegion.dataset.bsToggle = "modal";
                        btnEditRegion.dataset.bsTarget = "#editRegionModal";

                        btnDeleteRegion.dataset.regionId = regionId;
                        btnDeleteRegion.dataset.bsToggle = "modal";
                        btnDeleteRegion.dataset.bsTarget = "#deleteRegionModal";

                        liRegion.dataset.bsToggle = "collapse";
                        liRegion.dataset.bsTarget = `#collapseCountry${regionId}`;

                        //adding content to elements
                        btnAddCountry.innerHTML = "Add Country";
                        btnEditRegion.innerHTML = "Edit Region";
                        btnDeleteRegion.innerHTML = "Delete Region";

                        liRegion.innerHTML = location.name;

                        //organizing elements
                        divLocationsContainer.appendChild(divAddRegion);
                        divLocationsContainer.appendChild(divTreeContainer);


                        divTreeContainer.appendChild(divRegionActionsContainer);
                        divRegionActionsContainer.appendChild(btnAddCountry);
                        divRegionActionsContainer.appendChild(btnEditRegion);
                        divRegionActionsContainer.appendChild(btnDeleteRegion);
                        divTreeContainer.appendChild(ulLocations);
                        ulLocations.appendChild(divRegionContainer);
                        divRegionContainer.appendChild(liRegion);

                        const countries = location.countries

                        countries.forEach(country=>{

                            const countryId = country.id;

                            //creating elements
                            var ulCountries = document.createElement('ul');
                            var divCountryContainer = document.createElement('div');
                            var liCountry = document.createElement('li');
                            var divCountryActionsContainer = document.createElement('div');
                            var aCityAdd = document.createElement('a');
                            var imgCityAdd = document.createElement('img');
                            var aCountryEdit = document.createElement('a');
                            var imgCountryEdit = document.createElement('img');
                            var aCountryDelete = document.createElement('a');
                            var imgCountrDelete = document.createElement('img');
                            

                            //adding classes to elements
                            ulCountries.classList.add('collapse');
                            divCountryContainer.classList.add('d-flex');
                            divCountryActionsContainer.classList.add('d-flex', 'mb-3', 'ms-5');
                            aCityAdd.classList.add('me-3')
                            aCountryEdit.classList.add('me-3');

                            //adding attributes to elements
                            ulCountries.id = `collapseCountry${regionId}`;

                            liCountry.dataset.bsToggle = "collapse";
                            liCountry.dataset.bsTarget = `#collapseCity${country.id}`

                            imgCityAdd.src = "./node_modules/bootstrap-icons/icons/plus-square.svg";
                            imgCityAdd.alt = "Add city";
                            imgCityAdd.height = "20";
                            imgCityAdd.width = "20";
                            imgCityAdd.dataset.countryId = country.id
                            imgCityAdd.dataset.bsToggle = "modal";
                            imgCityAdd.dataset.bsTarget = "#addCityModal";

                            imgCountryEdit.src = "./node_modules/bootstrap-icons/icons/pencil.svg";
                            imgCountryEdit.alt = "Edit country";
                            imgCountryEdit.height = "20";
                            imgCountryEdit.width = "20";
                            imgCountryEdit.dataset.countryId = country.id
                            imgCountryEdit.dataset.bsToggle = "modal";
                            imgCountryEdit.dataset.bsTarget = "#editCountryModal";

                            imgCountrDelete.src = "./node_modules/bootstrap-icons/icons/trash.svg";
                            imgCountrDelete.alt = "Delete country";
                            imgCountrDelete.height = "20";
                            imgCountrDelete.width = "20";
                            imgCountrDelete.dataset.countryId = country.id;
                            imgCountrDelete.dataset.bsToggle = "modal";
                            imgCountrDelete.dataset.bsTarget = "#deleteCountryModal";

                            //adding content to elements
                            liCountry.innerHTML = country.name;

                            //organizing elements
                            ulLocations.appendChild(ulCountries);
                            ulCountries.appendChild(divCountryContainer);
                            divCountryContainer.appendChild(liCountry);
                            divCountryContainer.appendChild(divCountryActionsContainer);
                            divCountryActionsContainer.appendChild(aCityAdd);
                            aCityAdd.appendChild(imgCityAdd);
                            divCountryActionsContainer.appendChild(aCountryEdit);
                            aCountryEdit.appendChild(imgCountryEdit);
                            divCountryActionsContainer.appendChild(aCountryDelete);
                            aCountryDelete.appendChild(imgCountrDelete);

                            const cities = country.cities;

                            cities.forEach(city =>{

                                //creating elements
                                var ulCities = document.createElement('ul');
                                var divCityContainer = document.createElement('div');
                                var liCity = document.createElement('li');
                                var divCitiesActionContainer = document.createElement('div');
                                var aCityEdit = document.createElement('a');
                                var imgCityEdit = document.createElement('img');
                                var aCityDelete = document.createElement('a');
                                var imgCityDelete = document.createElement('img');

                                //adding classes to elements
                                ulCities.classList.add('collapse');
                                divCityContainer.classList.add('d-flex');
                                divCitiesActionContainer.classList.add('d-flex', 'mb-3', 'ms-5');
                                aCityEdit.classList.add('me-3');

                                //adding attributes to elements
                                ulCities.id = `collapseCity${countryId}`

                                imgCityEdit.src = "./node_modules/bootstrap-icons/icons/pencil.svg";
                                imgCityEdit.alt = "Edit city";
                                imgCityEdit.height = "20";
                                imgCityEdit.width = "20";
                                imgCityEdit.dataset.cityId = city.id;
                                imgCityEdit.dataset.bsToggle = "modal";
                                imgCityEdit.dataset.bsTarget = "#editCityModal";

                                imgCityDelete.src = "./node_modules/bootstrap-icons/icons/trash.svg";
                                imgCityDelete.alt = "Delete city";
                                imgCityDelete.height = "20";
                                imgCityDelete.width = "20";
                                imgCityDelete.dataset.cityId = city.id;
                                imgCityDelete.dataset.bsToggle = "modal";
                                imgCityDelete.dataset.bsTarget = "#deleteCityModal";

                                //adding content to elements
                                liCity.innerHTML = city.name;

                                //organizing elements
                                ulCountries.appendChild(ulCities);
                                ulCities.appendChild(divCityContainer);
                                divCityContainer.appendChild(liCity);
                                divCityContainer.appendChild(divCitiesActionContainer);
                                divCitiesActionContainer.appendChild(aCityEdit);
                                aCityEdit.appendChild(imgCityEdit);
                                divCitiesActionContainer.appendChild(aCityDelete);
                                aCityDelete.appendChild(imgCityDelete);
                            })
                        })


                    });
                })
            }else{
                response.json().then((res)=>{
                    var message = document.createElement('h1');

                    message.innerHTML = res.message;

                    divLocationsContainer.appendChild(message);

                })
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", getAllLocations);