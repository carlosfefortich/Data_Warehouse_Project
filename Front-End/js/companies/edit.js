const inputCompanyEditName = document.getElementById('companyEditInputName');
const inputCompanyEditEmail = document.getElementById('companyEditInputEmail');
const selectCompanyEditCity = document.getElementById('edit-company-select');
const inputCompanyEditAddress = document.getElementById('companyEditInputAddress');
const inputCompanyEditPhone = document.getElementById('companyEditInputPhone');
const formCompanyEdit = document.getElementById('edit-company-form');

getCompanyId()

formCompanyEdit.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let companyId = sessionStorage.getItem("companyId");

    if(jwt != null){

        fetch(`http://localhost:3000/companies/update/${companyId}`, {
            method: 'PUT',
            body: `{ "name": "${inputCompanyEditName.value}", "address": "${inputCompanyEditAddress.value}", "email": "${inputCompanyEditEmail.value}", "phone": "${inputCompanyEditPhone.value}", "cityId": "${selectCompanyEditCity.value}" } `,
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
                response.json().then((error)=>{
                    alert(error.message);
                })
            }
        })
    }
})