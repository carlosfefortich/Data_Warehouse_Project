const inputAddContactName = document.getElementById('contactAddInputName');
const inputAddContactLastName = document.getElementById('contactAddInputLastName');
const inputAddContactEmail = document.getElementById('contactAddInputEmail');
const inputAddContactAddress = document.getElementById('contactAddInputAddress');
const inputAddContactPosition = document.getElementById('contactAddInputPosition');
const selectAddContactInterest = document.getElementById('contactAddSelectInterest');
const selectAddContactCompany = document.getElementById('contactAddSelectCompany');
const selectAddContactCity = document.getElementById('contactAddSelectCity');
const formAddContact = document.getElementById('add-contact-form');

formAddContact.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));

    if(jwt != null){
        fetch('http://localhost:3000/contacts/create', {
            method: 'POST',
            body: `{ "name": "${inputAddContactName.value}", "lastName": "${inputAddContactLastName.value}", "email": "${inputAddContactEmail.value}", "address": "${inputAddContactAddress.value}", "position": "${inputAddContactPosition.value}", "interest": "${selectAddContactInterest.value}", "companyId": "${selectAddContactCompany.value}", "cityId": "${selectAddContactCity.value}" }`,
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