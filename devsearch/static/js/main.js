let searchForm = document.getElementById('searchForm')
let pageLinks = document.getElementsByClassName('page-link')

// ENSURE SEARCH FORM EXIST

if(searchForm){
    for(let i=0; i < pageLinks.length; i++){
        pageLinks[i].addEventListener('click', function (e){
            e.preventDefault();
            
            
            // GET THE DATA ATTRIBUTE

            let page = this.dataset.page
            
            //ADD HIDDEN INPUT TO FORM

            searchForm.innerHTML += `<input value=${page} name="page" hidden/>`

            //SUBMIT FORM
            searchForm.submit()

        })
    }
}

