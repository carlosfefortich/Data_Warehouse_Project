const btnSearch = document.getElementById('btn-search');
const inputSearchContactName = document.getElementById('contactSearchInputName');
const inputSearchContactLastName = document.getElementById('contactSearchInputLastName');
const inputSearchContactEmail = document.getElementById('contactSearchInputEmail');
const selectSearchContactCompany = document.getElementById('contactSearchSelectCompany');

const formSearchContact = document.getElementById('form-search');

formSearchContact.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("name: ",inputSearchContactName.value);
    let jwt = JSON.parse(sessionStorage.getItem("jwt"));

    if(jwt != null){
        fetch('http://localhost:3000/contacts/search', {
            method: 'POST',
            body: `{ "name": "${inputSearchContactName.value}", "lastName": "${inputSearchContactLastName.value}", "email": "${inputSearchContactEmail.value}", "companyId": "${selectSearchContactCompany.value}" }  `,
            headers: {
                'Content-Type': "application/json",
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status == 200){
                response.json().then((data)=>{
                    console.log(data)
                    const searchFormContainer = document.getElementById('search-form-container')
                    const divSearchResults = document.getElementById('search-results');
                    divSearchResults.classList.replace('d-none', 'd-block');
                    searchFormContainer.classList.replace('d-block', 'd-none');
                    const divResultsContainer = document.getElementById('search-results-container');

                    const results = data.contacts;
                    results.forEach((result)=>{
                        console.log(result)
                        //creating elements
                        var divResultContainer = document.createElement('div');
                        var divResultName = document.createElement('div');
                        var pResultName = document.createElement('p');
                        var divResultEmail = document.createElement('div');
                        var pResultEmail = document.createElement('p');
                        var divResultCity = document.createElement('div');
                        var pResultCity = document.createElement('p');
                        var divResultCompany = document.createElement('div');
                        var pResultCompany = document.createElement('p');
                        var divResultPosition = document.createElement('div');
                        var pResultPosition = document.createElement('p');
                        var divResultInterest = document.createElement('div');
                        var pResultInterest = document.createElement('p');

                        //adding classes to elements
                        divResultContainer.classList.add('row');
                        divResultName.classList.add('col');
                        divResultEmail.classList.add('col');
                        divResultCity.classList.add('col');
                        divResultCompany.classList.add('col');
                        divResultPosition.classList.add('col');
                        divResultInterest.classList.add('col');

                        //adding attributes to elements


                        //adding content to elements
                        pResultName.innerHTML = result.name + " " + result.lastName;
                        pResultEmail.innerHTML = result.email;
                        pResultCity.innerHTML = result.city.name;
                        pResultCompany.innerHTML = result.company.name;
                        pResultPosition.innerHTML = result.position;
                        pResultInterest.innerHTML = result.interest + "%";

                        //organizing elements
                        divResultsContainer.appendChild(divResultContainer);
                        divResultContainer.appendChild(divResultName);
                        divResultName.appendChild(pResultName);
                        divResultContainer.appendChild(divResultEmail);
                        divResultEmail.appendChild(pResultEmail);
                        divResultContainer.appendChild(divResultCity);
                        divResultCity.appendChild(pResultCity);
                        divResultContainer.appendChild(divResultCompany);
                        divResultCompany.appendChild(pResultCompany);
                        divResultContainer.appendChild(divResultPosition);
                        divResultPosition.appendChild(pResultPosition);
                        divResultContainer.appendChild(divResultInterest);
                        divResultInterest.appendChild(pResultInterest);
                    })
                    



                })
            }
        })
    }
})