const checkboxMain = document.getElementById('check-main');
const checkboxSub = document.getElementsByName('check');
var checkboxIds = [];


checkboxMain.addEventListener('change', (e)=>{
    
    const ele = document.getElementsByName('check');
    console.log(ele)
    
    ele.forEach((checkbox)=>{
        if(checkbox.type == 'checkbox'){
            checkbox.checked = true;
            checkboxIds.push(checkbox.value);
            sessionStorage.setItem("contactId", checkboxIds);
        }
    })

    console.log(checkboxIds);
    
    let checkAllIds = sessionStorage.getItem("contactId").split(',')

    if(!e.target.checked){
        ele.forEach((checkbox)=>{
            checkbox.checked = false;
            let i = checkAllIds.indexOf(checkbox.value);
            console.log(i);
            checkboxIds.splice(i, 1);
            console.log(checkboxIds.splice(i, 1));
            sessionStorage.setItem("contactId", checkboxIds);
        })
    }
    

})

const btnDeleteAll = document.getElementById('btnDeleteAll');
const divSelectedContacts = document.getElementById('div-selected')
const spanSelectedContacts = document.getElementById('selected');
document.onchange = ((element)=>{
    if(element.target.tagName == 'INPUT'){
        divSelectedContacts.classList.remove('d-none');
        
        let id = element.target.value;
        console.log(element.target.dataset.contactId);
        let checked = element.target.checked;
        if(sessionStorage.getItem("contactId")){
            let checkIds = sessionStorage.getItem("contactId").split(',');
            let i = checkIds.indexOf(id);
            spanSelectedContacts.innerHTML = checkIds.length
            console.log(id);
            console.log(parseInt(id, 10))
            console.log(Number.isInteger(parseInt(id, 10)))
            if(Number.isInteger(parseInt(id, 10))){
                if (!checked){
                    if(i>=0){
                        checkIds.splice(i, 1);
                    }
                    sessionStorage.setItem("contactId", checkIds);
                    btnDeleteAll.dataset.contactId = checkIds;
                    spanSelectedContacts.innerHTML = checkIds.length
                }else{
                    if(i<0){
                        checkIds.push(id);
                        sessionStorage.setItem("contactId", checkIds); 
                        btnDeleteAll.dataset.contactId = checkIds
                        spanSelectedContacts.innerHTML = checkIds.length
                    }

            }
           
            }    
        }else{
            sessionStorage.setItem("contactId", id);
        }
        
        
         
    }
}) 

console.log(checkboxIds);

window.onload = sessionStorage.removeItem("contactId", null);
// getCheckBoxId()
