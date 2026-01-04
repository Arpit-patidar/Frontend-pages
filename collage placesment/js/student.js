// // let studcontainer = document.getElementById("student-container");
// // let allstudent;

// // let callfromapi = async () => {
// //     allstudent = await getstudent();
// //     console.log(allstudent);
// //     displaystudent(allstudent);
// // }
// // callfromapi();

// // let displaystudent = async (students) => {
// //     studcontainer.innerHTML = students.map((ele) => `
// //         <div class="student-card">
// //             <img src="${ele.personal_info?.profile_image || 'https://cdn.wallpapersafari.com/90/45/Ajn4yi.jpg '}" alt="Profile">
// //             <h4>Name: ${ele.personal_info?.full_name || 'No Name'}</h4>
// //             <h4>CollegeID: ${ele.academic_info.college_id}</h4>
// //             <h5>Placement status: ${ele.placement_status}</h5>
// //             <div class="card-buttons">
// //                 <button class="add-btn" data-id="${ele.student_id}">Add</button>
// //                 <button class="delete-btn" data-id="${ele.student_id}">Delete</button>
// //             </div>
// //         </div>
// //     `).join("");
// // }

// //new 
// let studcontainer = document.getElementById("student-container");
// let allstudent = [];

// // GET STUDENTS (API)


// // CALL API
// function callfromapi() {
//     getstudent().then((data) => {
//         allstudent = data;
//         console.log(allstudent);
//         displaystudent(allstudent);
//     });
// }
// callfromapi();

// // DISPLAY STUDENTS
// function displaystudent(students) {
//     studcontainer.innerHTML = "";

//     students.forEach((ele) => {
//         studcontainer.innerHTML += `
//             <div class="student-card">
//                 <img src="${ele.personal_info?.profile_image }">
//                 <h4>Name: ${ele.personal_info?.full_name}</h4>
//                 <h4>College ID: ${ele.academic_info?.college_id}</h4>
//                 <h5>Placement status: ${ele.placement_status}</h5>

//                 <div class="card-buttons">
//                     <button class="add-btn" onclick="editstudent(`${ele.student_id}`)" data-id="${ele.student_id}">Edit</button>
//                     <button class="delete-btn" data-id="${ele.student_id}">Delete</button>
//                 </div>
//             </div>
//         `;
//     });
// }
// //Edit 

// let editstudent=(id)=>{
//     console.log("editstudent",id);
// window.location.href=`../Html/editstudent.html?id=${id}`
// }

// // Filters
// document.getElementById("placestudent").addEventListener("click", () => {
//     displaystudent(allstudent.filter(ele => ele.placement_status === "Placed"));
// });

// document.getElementById("notplacestudent").addEventListener("click", () => {
//     displaystudent(allstudent.filter(ele => ele.placement_status === "Not Placed"));
// });

// document.getElementById("refreshstudent").addEventListener("click", () => {
//     displaystudent(allstudent);
// });

// document.getElementById("add").addEventListener("click", () => {
//     window.location.href = "./addstudent.html";
// });

// // Delete student
// studcontainer.addEventListener("click", async (e) => {
//     if(e.target.classList.contains("delete-btn")){
//         let studentId = e.target.getAttribute("data-id");
//         if(confirm("Are you sure to delete this student?")){
//             try {
//                 let res = await fetch(`https://placementstracker-4.onrender.com/api/students/${studentId}`, { method: "DELETE" });
//                 if(res.ok){
//                     alert("Student deleted successfully!");
//                     allstudent = allstudent.filter(s => s.student_id !== studentId);
//                     displaystudent(allstudent); // re-render updated list
//                 } else {
//                     let err = await res.json();
//                     alert("Error: " + (err.message || "Failed to delete"));
//                 }
//             } catch(err) {
//                 console.error(err);
//                 alert("Error: " + err.message);
//             }
//         }
//     }
// });
// let data = JSON.parse(localStorage.getItem("searchResult"));

// if(data){
//     data.forEach(s=>{
//         studentContainer.innerHTML += `
//             <div class="student-card">
//                 <h3>${s.personal_info?.full_name || "N/A"}</h3>
//                 <p>${s.placement_status || ""}</p>
//             </div>
//         `;
//     });
// }
// function searchStudents(query){
//     const cards = document.querySelectorAll(".student-card");

//     cards.forEach(card=>{
//         const text = card.innerText.toLowerCase();
//         card.style.display = text.includes(query) ? "block" : "none";
//     });
// }const searchInput = document.getElementById("searchInput");
// const searchBtn = document.getElementById("searchBtn");

// /* SEARCH FUNCTION */
// function searchStudents(query){
//     const cards = document.querySelectorAll(".student-card");

//     cards.forEach(card=>{
//         const text = card.textContent.toLowerCase();
//         card.style.display = text.includes(query) ? "block" : "none";
//     });
// }

// /* BUTTON SEARCH */
// searchBtn.addEventListener("click", ()=>{
//     const query = searchInput.value.toLowerCase().trim();
//     searchStudents(query);
// });

// /* LIVE SEARCH (typing) */
// searchInput.addEventListener("keyup", ()=>{
//     const query = searchInput.value.toLowerCase().trim();
//     searchStudents(query);
// });
// let delet  = async(id)=>{
//     let confirmdelete= confirm("Are you sure")
//     if(!confirmdelete) return
//     await fetch(``)
//     method :"DELETE"
// }
let studcontainer = document.getElementById("student-container");
let allstudent = [];

/* ================= API CALL ================= */
function callfromapi() {
    getstudent().then((data) => {
        allstudent = data;
        displaystudent(allstudent);
    }).catch(err => console.error(err));
}
callfromapi();

/* ================= DISPLAY ================= */
function displaystudent(students) {
    studcontainer.innerHTML = "";

    students.forEach((ele) => {
        studcontainer.innerHTML += `
            <div class="student-card">
                <img src="${ele.personal_info?.profile_image || 'https://cdn.wallpapersafari.com/90/45/Ajn4yi.jpg'}" alt="profile">

                <h4>Name: ${ele.personal_info?.full_name || "N/A"}</h4>
                <h4>College ID: ${ele.academic_info?.college_id || "N/A"}</h4>
                <h5>Placement Status: ${ele.placement_status || "N/A"}</h5>

                <div class="card-buttons">
                    <button class="edit-btn" data-id="${ele.student_id}">Edit</button>
                    <button class="delete-btn" data-id="${ele.student_id}">Delete</button>
                </div>
            </div>
        `;
    });
}
studcontainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
        const id = e.target.dataset.id;
        window.location.href = `editstudent.html?id=${id}`;
    }
});


/* ================= EDIT ================= */
function editstudent(id) {
    window.location.href = `../Html/editstudent.html?id=${id}`;
}

/* ================= DELETE + EDIT HANDLER ================= */
studcontainer.addEventListener("click", async (e) => {

    /* DELETE */
    if (e.target.classList.contains("delete-btn")) {
        const id = e.target.dataset.id;

        if (!confirm("Are you sure you want to delete this student?")) return;

        try {
            let res = await fetch(
                `https://placementstracker-4.onrender.com/api/students/${id}`,
                { method: "DELETE" }
            );

            if (res.ok) {
                allstudent = allstudent.filter(s => s.student_id !== id);
                displaystudent(allstudent);
                alert("Student deleted successfully!");
            } else {
                alert("Delete failed!");
            }
        } catch (err) {
            console.error(err);
        }
    }

    /* EDIT */
    if (e.target.classList.contains("edit-btn")) {
        editstudent(e.target.dataset.id);
    }
});

/* ================= FILTERS ================= */
document.getElementById("placestudent").addEventListener("click", () => {
    displaystudent(allstudent.filter(s => s.placement_status === "Placed"));
});

document.getElementById("notplacestudent").addEventListener("click", () => {
    displaystudent(allstudent.filter(s => s.placement_status === "Not Placed"));
});

document.getElementById("refreshstudent").addEventListener("click", () => {
    displaystudent(allstudent);
});

document.getElementById("add").addEventListener("click", () => {
    window.location.href = "./addstudent.html";
});

/* ================= SEARCH ================= */
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchStudents(query) {
    const cards = document.querySelectorAll(".student-card");

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "block" : "none";
    });
}

searchBtn.addEventListener("click", () => {
    searchStudents(searchInput.value.toLowerCase().trim());
});

searchInput.addEventListener("keyup", () => {
    searchStudents(searchInput.value.toLowerCase().trim());
});
