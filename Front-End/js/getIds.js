const getCompanyId = ()=>{
    document.onclick = ((e)=>{
        if(e.target.tagName == 'IMG'){
            let id = e.target.getAttribute("data-company-id");
            sessionStorage.setItem("companyId", id);
            console.log(id);
        }
    })

}

const getContactId = ()=>{
    document.onclick = ((e)=>{
        if(e.target.tagName == 'IMG'){
            let id = e.target.getAttribute("data-contact-id");
            sessionStorage.setItem("contactId", id);
            console.log(id);
        }
    })

}

const getRegionIdContact = ()=>{
    document.onchange = ((element)=>{
        if(element.target.tagName == 'SELECT'){
            let id = element.target.options[element.target.selectedIndex].getAttribute('data-region-id');
            console.log(id);
            sessionStorage.setItem("regionId", id);    
        }

    })

}

const getCountryIdContact = ()=>{
    document.onchange = ((element)=>{
        if(element.target.tagName == 'SELECT'){
            let id = element.target.options[element.target.selectedIndex].getAttribute('data-country-id');
            console.log(id);
            sessionStorage.setItem("countryId", id);
        }

    })

}

// const getCheckBoxId = () =>{
//     document.onchange = ((element)=>{
//      if(element.target.tagName == 'INPUT'){
//          let id = element.target.value;
//          console.log(id);
//          console.log(parseInt(id, 10))
//          console.log(Number.isInteger(parseInt(id, 10)))
//          if(Number.isInteger(parseInt(id, 10))){
 
//              // console.log(checkboxIds)      
            
//          }
          
//      }
//  }) 
// }

