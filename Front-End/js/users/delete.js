getUserId();

const deleteUser = () =>{
    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(jwt.token);
    let userId = sessionStorage.getItem("userId");
    console.log(userId);

    if(jwt != null){
        fetch(`http://localhost:3000/users/delete/${userId}`, {
            method: "DELETE",
            headers: { "Authorization": "Bearer " + jwt.token }
        }).then((response)=>{
            if(response.status === 200){
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
}