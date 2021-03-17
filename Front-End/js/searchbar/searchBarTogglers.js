const imgSearchToggle = document.getElementById('search-toggle');
const divSearchContainer = document.getElementById('search-form-container');
const btnCloseForm = document.getElementById('btn-close-search-form');
var searchResultContainer = document.getElementById('search-result-container');

imgSearchToggle.addEventListener('click', (e)=>{
    if(divSearchContainer.classList.contains('d-none')){
        divSearchContainer.classList.replace('d-none', 'd-block')
        
    }
})

btnCloseForm.addEventListener('click',(e)=>{
    if(divSearchContainer.classList.contains('d-block')){
        divSearchContainer.classList.replace('d-block', 'd-none');
    }
    searchResultContainer.innerHTML = "";
})