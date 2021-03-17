const getCompaniesSelect = (elementId) =>{
    let selectCompanies = document.getElementById(elementId);

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));

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

                        const companiesContacts = data.companies;
                        companiesContacts.forEach(company => {
                            var optionCompanyName = document.createElement('option');

                            optionCompanyName.value = company.id;
                            optionCompanyName.dataset.companyId = company.id;

                            optionCompanyName.innerHTML = company.name;

                            selectCompanies.appendChild(optionCompanyName);
                        });
                    })
                }
            })
    }
}

document.addEventListener("DOMContentLoaded", getCompaniesSelect('contactAddSelectCompany'));
document.addEventListener("DOMContentLoaded", getCompaniesSelect('contactEditSelectCompany'));
document.addEventListener("DOMContentLoaded", getCompaniesSelect('contactSearchSelectCompany'));
