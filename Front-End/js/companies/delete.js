const btnCompanyDelete = document.getElementById('btn-delete-company');

btnCompanyDelete.addEventListener('click', (e)=>{

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    let companyId = sessionStorage.getItem("companyId");

    if(jwt != null){
        fetch(`http://localhost:3000/companies/delete/${companyId}`, {
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