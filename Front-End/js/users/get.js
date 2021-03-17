const getUsers = () =>{
    const divUsersContainer = document.getElementById('users-container');

    let jwt = JSON.parse(sessionStorage.getItem("jwt"));
    console.log(jwt)
    if(jwt != null){
        fetch('http://localhost:3000/users/', {
            method: 'GET',
            headers: { "Authorization": "Bearer " + jwt.token }
        }).then((response)=>{
            response.json().then((data)=>{
                console.log(data.users);
                data.users.forEach(user => {
                    let divUserContainer = document.createElement('div');
                    let divUserName = document.createElement('div');
                    let pName = document.createElement('p');
                    let divUserEmail = document.createElement('div');
                    let pEmail = document.createElement('p');
                    let divUserRole = document.createElement('div');
                    let pRole = document.createElement('p');
                    let divUserActionsContainer = document.createElement('div');
                    let divUserActions = document.createElement('div');
                    let aUserEdit = document.createElement('a');
                    let imgUserEdit = document.createElement('img');
                    let aUserDelete = document.createElement('a');
                    let imgUserDelete = document.createElement('img');


                    divUserContainer.dataset.userId = user.id;
                    divUserContainer.classList.add('row');
                    divUserName.classList.add('col');
                    divUserEmail.classList.add('col');
                    divUserRole.classList.add('col');
                    divUserActionsContainer.classList.add('col');
                    divUserActions.classList.add('d-flex', 'mb-3');
                    aUserEdit.classList.add('me-3');

                    pName.innerHTML = user.name + " " + user.lastName;
                    pEmail.innerHTML = user.email;
                    pRole.innerHTML = user.role;

                    aUserEdit.href = "#";
                    
                    imgUserEdit.src = "./node_modules/bootstrap-icons/icons/pencil.svg";
                    imgUserEdit.alt = "edit";
                    imgUserEdit.height = "20";
                    imgUserEdit.width = "20";
                    imgUserEdit.dataset.bsToggle = "modal";
                    imgUserEdit.dataset.bsTarget = "#editUserModal"
                    imgUserEdit.dataset.userId = user.id;
                    
                    aUserDelete.href = "#";
                    imgUserDelete.dataset.userId = user.id;
                    imgUserDelete.src = "./node_modules/bootstrap-icons/icons/trash.svg";
                    imgUserDelete.alt = "delete";
                    imgUserDelete.height = "20";
                    imgUserDelete.width = "20";
                    imgUserDelete.dataset.bsToggle = "modal";
                    imgUserDelete.dataset.bsTarget = "#deleteUserModal";

                    divUsersContainer.appendChild(divUserContainer);
                    divUserContainer.appendChild(divUserName);
                    divUserContainer.appendChild(divUserEmail);
                    divUserContainer.appendChild(divUserRole);
                    divUserContainer.appendChild(divUserActionsContainer);
                    divUserName.appendChild(pName);
                    divUserEmail.appendChild(pEmail);
                    divUserRole.appendChild(pRole);
                    divUserActionsContainer.appendChild(divUserActions);
                    divUserActions.appendChild(aUserEdit);
                    aUserEdit.appendChild(imgUserEdit);
                    divUserActions.appendChild(aUserDelete);
                    aUserDelete.appendChild(imgUserDelete);
                });
            })
        })
    }
    
}

document.addEventListener("DOMContentLoaded", getUsers);