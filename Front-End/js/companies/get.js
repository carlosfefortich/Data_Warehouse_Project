const getCompanies = () =>{
    const divCompaniesContainer = document.getElementById('companies-container');

    
    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(jwt);

    if(jwt != null){
        fetch('http://localhost:3000/companies/', {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status == 200){
                response.json().then((data)=>{
                    console.log(data);
                    const companies = data.companies;
                    console.log(companies);
                    companies.forEach(company => {
                        //create elements
                        var divCompanyContainer = document.createElement('div');
                        var divCompanyName = document.createElement('div');
                        var pCompanyName = document.createElement('p');
                        var divCompanyEmail = document.createElement('div');
                        var pCompanyEmail = document.createElement('p');
                        var divCompanyCity = document.createElement('div');
                        var pCompanyCity = document.createElement('p');
                        var divCompanyAddress = document.createElement('div');
                        var pCompanyAddress = document.createElement('p');
                        var divCompanyPhone = document.createElement('div');
                        var pCompanyPhone = document.createElement('p');
                        var divCompanyActionsContainer = document.createElement('div');
                        var divCompanyActions = document.createElement('div');
                        var aCompanyEdit = document.createElement('a');
                        var imgCompanyEdit = document.createElement('img');
                        var aCompanyDelete = document.createElement('a');
                        var imgCompanyDelete = document.createElement('img');

                        //add class to elements
                        divCompanyContainer.classList.add('row');
                        divCompanyName.classList.add('col');
                        divCompanyEmail.classList.add('col');
                        divCompanyCity.classList.add('col');
                        divCompanyAddress.classList.add('col');
                        divCompanyPhone.classList.add('col');
                        divCompanyActionsContainer.classList.add('col');
                        divCompanyActions.classList.add('d-flex', 'mb-3');
                        aCompanyEdit.classList.add('me-3');

                        //add attributes to elements
                        divCompanyContainer.dataset.companyId = company.id;

                        imgCompanyEdit.src = "./node_modules/bootstrap-icons/icons/pencil.svg";
                        imgCompanyEdit.alt = "Edit company";
                        imgCompanyEdit.height = "20";
                        imgCompanyEdit.width = "20";
                        imgCompanyEdit.dataset.bsToggle = "modal";
                        imgCompanyEdit.dataset.bsTarget = "#editCompanyModal";
                        imgCompanyEdit.dataset.companyId = company.id;

                        imgCompanyDelete.src = "./node_modules/bootstrap-icons/icons/trash.svg";
                        imgCompanyDelete.alt = "Delete company";
                        imgCompanyDelete.height = "20";
                        imgCompanyDelete.width = "20";
                        imgCompanyDelete.dataset.bsToggle = "modal";
                        imgCompanyDelete.dataset.bsTarget = "#deleteCompanyModal";
                        imgCompanyDelete.dataset.companyId = company.id;

                        //add content to elements
                        pCompanyName.innerHTML = company.name;
                        pCompanyEmail.innerHTML = company.email;
                        pCompanyCity.innerHTML = company.city.name;
                        pCompanyAddress.innerHTML = company.address;
                        pCompanyPhone.innerHTML = company.phone;

                        //organize elements
                        divCompaniesContainer.appendChild(divCompanyContainer);
                        divCompanyContainer.appendChild(divCompanyName);
                        divCompanyName.appendChild(pCompanyName);
                        divCompanyContainer.appendChild(divCompanyEmail);
                        divCompanyEmail.appendChild(pCompanyEmail);
                        divCompanyContainer.appendChild(divCompanyCity);
                        divCompanyCity.appendChild(pCompanyCity);
                        divCompanyContainer.appendChild(divCompanyAddress);
                        divCompanyAddress.appendChild(pCompanyAddress);
                        divCompanyContainer.appendChild(divCompanyPhone);
                        divCompanyPhone.appendChild(pCompanyPhone);
                        divCompanyContainer.appendChild(divCompanyActionsContainer);
                        divCompanyActionsContainer.appendChild(divCompanyActions);
                        divCompanyActions.appendChild(aCompanyEdit);
                        aCompanyEdit.appendChild(imgCompanyEdit);
                        divCompanyActions.appendChild(aCompanyDelete);
                        aCompanyDelete.appendChild(imgCompanyDelete);
                    });
                })
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", getCompanies);