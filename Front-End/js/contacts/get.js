const getContacts = () =>{

    const divContactsContainer = document.getElementById('contacts-container');

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(jwt);

    if(jwt != null){

        fetch('http://localhost:3000/contacts/', {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status == 200){
                response.json().then((data)=>{
                    console.log(data);
                    const contacts = data.contacts;
                    console.log(contacts);
                    contacts.forEach(contact => {
                        //creating elements
                        var divContacts = document.createElement('div');
                        var divCheckbox = document.createElement('div');
                        var inputCheckBox = document.createElement('input');
                        var divContactEmailContainer = document.createElement('div');
                        var divContactEmail = document.createElement('div');
                        var pContactName = document.createElement('p');
                        var pContactEmail = document.createElement('p');
                        var divContactCity = document.createElement('div');
                        var pContactCity = document.createElement('p');
                        var divContactCompany = document.createElement('div');
                        var pContactCompany = document.createElement('p');
                        var divContactPosition = document.createElement('div');
                        var pContactPosition = document.createElement('p');
                        var divContactInterest = document.createElement('div');
                        var pContactInterest = document.createElement('p');
                        var divContactActionsContainer = document.createElement('div');
                        var divContactActions = document.createElement('div');
                        var aContactEdit = document.createElement('a');
                        var imgContactEdit = document.createElement('img');
                        var aContactDelete = document.createElement('a');
                        var imgContactDelete = document.createElement('img');

                        //adding classes to elements
                        divContacts.classList.add('row');
                        divCheckbox.classList.add('col');
                        divContactEmailContainer.classList.add('col');
                        divContactEmail.classList.add('d-flex', 'flex-column');
                        pContactName.classList.add('mb-0');
                        pContactEmail.classList.add('contact-email');
                        divContactCity.classList.add('col');
                        divContactCompany.classList.add('col');
                        divContactPosition.classList.add('col');
                        divContactInterest.classList.add('col');
                        divContactActionsContainer.classList.add('col');
                        divContactActions.classList.add('d-flex', 'mb-3');
                        aContactEdit.classList.add('me-3');

                        //adding attributes to elements
                        divContacts.dataset.contactId = contact.id;
                        inputCheckBox.dataset.contactId = contact.id;
                        inputCheckBox.value = contact.id;
                        inputCheckBox.type = "checkbox";
                        inputCheckBox.name = "check";

                        imgContactEdit.src = "./node_modules/bootstrap-icons/icons/pencil.svg";
                        imgContactEdit.alt = "Edit contact";
                        imgContactEdit.height = "20";
                        imgContactEdit.width = "20";
                        imgContactEdit.dataset.bsToggle = "modal";
                        imgContactEdit.dataset.bsTarget = "#editContactModal";
                        imgContactEdit.dataset.contactId = contact.id;

                        imgContactDelete.src = "./node_modules/bootstrap-icons/icons/trash.svg";
                        imgContactDelete.alt = "Delete contact";
                        imgContactDelete.height = "20";
                        imgContactDelete.width = "20";
                        imgContactDelete.dataset.bsToggle = "modal";
                        imgContactDelete.dataset.bsTarget = "#deleteContactModal";
                        imgContactDelete.dataset.contactId = contact.id;

                        //adding content to elements
                        pContactName.innerHTML = contact.name + ' ' + contact.lastName;
                        pContactEmail.innerHTML = contact.email;
                        pContactCity.innerHTML = contact.city.name;
                        pContactCompany.innerHTML = contact.company.name;
                        pContactPosition.innerHTML = contact.position
                        pContactInterest.innerHTML = contact.interest + '%';

                        //organizing elements
                        divContactsContainer.appendChild(divContacts);
                        divContacts.appendChild(divCheckbox);
                        divCheckbox.appendChild(inputCheckBox);
                        divContacts.appendChild(divContactEmailContainer);
                        divContactEmailContainer.appendChild(divContactEmail);
                        divContactEmail.appendChild(pContactName);
                        divContactEmail.appendChild(pContactEmail);
                        divContacts.appendChild(divContactCity);
                        divContactCity.appendChild(pContactCity);
                        divContacts.appendChild(divContactCompany);
                        divContactCompany.appendChild(pContactCompany);
                        divContacts.appendChild(divContactPosition);
                        divContactPosition.appendChild(pContactPosition);
                        divContacts.appendChild(divContactInterest);
                        divContactInterest.appendChild(pContactInterest);
                        divContacts.appendChild(divContactActionsContainer);
                        divContactActionsContainer.appendChild(divContactActions);
                        divContactActions.appendChild(aContactEdit);
                        aContactEdit.appendChild(imgContactEdit)
                        divContactActions.appendChild(aContactDelete);
                        aContactDelete.appendChild(imgContactDelete);
                    });
                })
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", getContacts);