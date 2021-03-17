const inputEditContactName = document.getElementById('contactEditInputName');
const inputEditContactLastName = document.getElementById('contactEditInputLastName');
const inputEditContactEmail = document.getElementById('contactEditInputEmail');
const inputEditContactAddress = document.getElementById('contactEditInputAddress');
const inputEditContactPosition = document.getElementById('contactEditInputPosition');
const selectEditContactInterest = document.getElementById('contactEditSelectInterest');
const selectEditContactCompany = document.getElementById('contactEditSelectCompany');
const selectEditContactCity = document.getElementById('contactEditSelectCity');
const formEditContact = document.getElementById('contact-edit-form');

getContactId();

formEditContact.addEventListener('submit', (e)=>{
    e.preventDefault();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let contactId = sessionStorage.getItem("contactId");

    if(jwt != null){
        fetch(`http://localhost:3000/contacts/update/${contactId}`, {
            method: 'PUT',
            body: `{ "name": "${inputEditContactName.value}", "lastName": "${inputEditContactLastName.value}", "email": "${inputEditContactEmail.value}", "address": "${inputEditContactAddress.value}", "position": "${inputEditContactPosition.value}", "interest": "${selectEditContactInterest.value}", "companyId": "${selectEditContactCompany.value}", "cityId": "${selectEditContactCity.value}" }`,
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