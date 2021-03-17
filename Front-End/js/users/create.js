const userCreateInputName = document.getElementById("userCreateInputName");
const userCreateInputLastName = document.getElementById("userCreateInputLastName");
const userCreateInputEmail = document.getElementById("userCreateInputEmail");
const userCreateInputRole = document.getElementById("userCreateInputRole");
const userCreateInputPassword = document.getElementById("userCreateInputPassword");
const userCreateInputRP = document.getElementById("userCreateInputRP");
const formUserCreate = document.getElementById("user-create");

formUserCreate.addEventListener('submit', (e)=>{
    e.preventDefault();

    if((userCreateInputPassword.value)!==(userCreateInputRP.value)){
        alert('Password and Repeat Password fields must be the same');
    }else{
        let jwt = JSON.parse(sessionStorage.getItem("jwt"));
        console.log(jwt.token);
        if(jwt != null){

            fetch('http://localhost:3000/users/register', {
                method: 'POST',
                body: `{ "name": "${userCreateInputName.value}", "lastName": "${userCreateInputLastName.value}", "email": "${userCreateInputEmail.value}", "password": "${userCreateInputPassword.value}", "role": "${userCreateInputRole.value}" }`,
                headers: {
                    'Content-Type': "application/json",
                    "Authorization": "Bearer " + jwt.token
                }
            }).then((response)=>{
                if(response.status == 200){
                    response.json().then((data)=>{
                        console.log(data);
                        alert(data.message);
                        location.reload();
                    })
                }else{
                    response.json().then((message)=>{
                        console.log(message);
                        alert(message.error);
                    })
                }
            })   
        }else{
            alert('You have to login!')
        }
         
    }

    
})