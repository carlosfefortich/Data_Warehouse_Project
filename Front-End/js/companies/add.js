const inputCompanyAddName = document.getElementById('companyAddInputName');
const inputCompanyAddEmail = document.getElementById('companyAddInputEmail');
const selectCompanyAddCity = document.getElementById('add-company-select');
const inputCompanyAddAddress = document.getElementById('companyAddInputAddress');
const inputCompanyAddPhone = document.getElementById('companyAddInputPhone');
const formCompanyAdd = document.getElementById('add-company-form');


formCompanyAdd.addEventListener('submit',(e)=>{
    e.preventDefault();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(selectCompanyAddCity.value);
    if(jwt != null){

        fetch('http://localhost:3000/companies/create', {
            method: 'POST',
            body: `{ "name": "${inputCompanyAddName.value}", "address": "${inputCompanyAddAddress.value}", "email": "${inputCompanyAddEmail.value}", "phone": "${inputCompanyAddPhone.value}", "cityId": "${selectCompanyAddCity.value}" }`,
            headers: {
                'Content-Type': "application/json",
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status == 200){
                response.json().then((data)=>{
                    if(!alert(data.message)){window.location.reload();}
                })
            }else{
                response.json().then((data)=>{
                    alert(data.message);
                })
            }
        })
    }
})