const formLogin = document.getElementById("login-form");
const inputLoginEmail = document.getElementById("inputLoginEmail");
const inputLoginPassword = document.getElementById("inputLoginPassword");
const navUsers = document.getElementById("nav-users");


formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(formLogin);
    // const formData = new FormData(formLogin);
    // for (var [key, value] of formData.entries()) { 
    //     console.log(key, value);
    //   }

    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: `{"email": "${inputLoginEmail.value}", "password": "${inputLoginPassword.value}"}`,
        headers: {
            'Content-Type': "application/json"
        }


    }).then((response)=> {
        if(response.status==200){
            response.json().then((data)=>{
                sessionStorage.setItem('jwt', JSON.stringify(data));
                console.log(data);
                
                if(!alert('You have logged in successfully!')){window.location.reload();}
                
            });
            
            
        }else{
            response.json().then((message)=>{
                console.log(message);
                alert(message.error);
            });
        }
        
    });
});