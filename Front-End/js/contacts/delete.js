const btnDeleteContact = document.getElementById('btn-delete-contact');

btnDeleteContact.addEventListener('click', ()=>{

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let contactId = sessionStorage.getItem("contactId");

    if(jwt != null){
        fetch(`http://localhost:3000/contacts/delete?ids=[${contactId}]`, {
            method: 'DELETE',
            headers: {
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