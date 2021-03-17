const userAccess = ()=>{
    const navUsers = document.getElementById('nav-users');
    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    if(jwt === null){
        navUsers.classList.add('d-none');
    }else{
        navUsers.classList.add('d-block')
    } 
}


const navController = (elementId)=>{
    const btnNav = document.getElementById(elementId);

    btnNav.addEventListener('click', (e)=>{
        
        let jwt = JSON.parse(sessionStorage.getItem("jwt"));
        console.log(jwt);

        if(jwt === null){
            e.preventDefault();
            alert('You dont have permission to do that. Please login!');
        }else{
            return
        }
    })
}

document.addEventListener("click", navController('nav-companies'));
document.addEventListener("click", navController("nav-locations"));
document.addEventListener("DOMContentLoaded", userAccess);