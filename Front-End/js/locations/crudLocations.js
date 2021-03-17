const createRegions = (jwt, locations, body) => {
    fetch(`http://localhost:3000/locations/${locations}/create`, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': "application/json",
            "Authorization": "Bearer " + jwt
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

const createCountriesCities = (jwt, locations, body) => {
    fetch(`http://localhost:3000/locations/${locations}/create`, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': "application/json",
            "Authorization": "Bearer " + jwt
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

const updateLocations = (jwt, locations, body, id) =>{
    fetch(`http://localhost:3000/locations/${locations}/update/${id}`, {
        method: 'PUT',
        body: body,
        headers: {
            'Content-Type': "application/json",
            "Authorization": "Bearer " + jwt
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

const deleteLocations = (jwt, locations, id) =>{
    fetch(`http://localhost:3000/locations/${locations}/delete/${id}`, {
        method:'DELETE',
        headers: {
            "Authorization": "Bearer " + jwt
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

const getRegionId = ()=>{
    document.onclick = ((e)=>{
        if(e.target.tagName == 'A'){
            let id = e.target.getAttribute("data-region-id");
            sessionStorage.setItem("regionId", id);
            console.log(id);
        }
    })

}

const getCountryId = ()=>{
    document.onclick = ((e)=>{
        if(e.target.tagName == 'IMG'){
            let id = e.target.getAttribute("data-country-id");
            sessionStorage.setItem("countryId", id);
            console.log(id);
        }
    })

}

const getCityId = ()=>{
    document.onclick = ((e)=>{
        if(e.target.tagName == 'IMG'){
            let id = e.target.getAttribute("data-city-id");
            sessionStorage.setItem("cityId", id);
            console.log(id);
        }
    })

}