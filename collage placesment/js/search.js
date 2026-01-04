const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

/* BUTTON CLICK SEARCH */
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if(!query){
        alert("Type something to search");
        return;
    }
    runSearch(query);
});

/* ENTER KEY SEARCH */
searchInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        runSearch(searchInput.value.trim().toLowerCase());
    }
});

/* MAIN SEARCH LOGIC */
function runSearch(query){
    /* page detect */
    if(location.pathname.includes("student")){
        searchStudents(query);
    }
    else if(location.pathname.includes("college")){
        searchColleges(query);
    }
    else if(location.pathname.includes("companies")){
        searchCompanies(query);
    }
    else if(location.pathname.includes("job-role")){
        searchJobRoles(query);
    }
    else{
        alert("Search available only on data pages");
    }
}
