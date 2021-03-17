const userEditInputName = document.getElementById("userEditInputName");
const userEditInputLastName = document.getElementById("userEditInputLastName");
const userEditInputEmail = document.getElementById("userEditInputEmail");
const userEditInputRole = document.getElementById("userEditInputRole");
const userEditInputPassword = document.getElementById("userEditInputPassword");
const formUserEdit = document.getElementById("user-edit");

const getUserId = ()=>{
    document.onclick = ((e)=>{
        if(e.target.tagName == 'IMG'){
            let id = e.target.getAttribute("data-user-id");
            sessionStorage.setItem("userId", id);
            console.log(id);
        }
    })

}

getUserId();

formUserEdit.addEventListener('submit', (event)=>{
    event.preventDefault();

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(jwt.token);
    let userId = sessionStorage.getItem("userId");
    console.log(userId);

    if(jwt != null){
        fetch(`http://localhost:3000/users/update/${userId}`, {
            method: "PUT",
            body: `{ "name": "${userEditInputName.value}", "lastName": "${userEditInputLastName.value}", "email": "${userEditInputEmail.value}", "password": "${userEditInputPassword.value}", "role": "${userEditInputRole.value}" }`,
            headers: {
                'Content-Type': "application/json",
                "Authorization": "Bearer " + jwt.token
            }
        }).then((response)=>{
            if(response.status === 200){
                response.json().then((data)=>{
                    alert(data.message);
                });
            }else{
                response.json().then((message)=>{
                    alert(message.message);
                })
            }
            
        })
    }
})