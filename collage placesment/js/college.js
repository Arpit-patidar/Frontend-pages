// let collegecontainer = document.getElementById("college-container")

// let allcollege;

// let callfromapi =async()=>{
//  allcollege =  await getcolleges()
//     // console.log(allcollege);
//     displaystudent(allcollege);
// }
// callfromapi();
// let displaystudent =async(college)=>{
// collegecontainer.innerHTML = college.map((ele)=>`
// <div class="college-card" onclick="goToStudents('${c.college_id}')">
// <div id="college-card">

// <h4>college Name:${ele.name}</h4>
// <h4>collegeId:${ele.college_id}</h4>
// <h4> location:${ele.location.city}</h4>

// </div>
// </div>

// `).join("")

// }
// college.js
// let container = document.getElementById("college-container");

// let displayColleges = (colleges) => {
//     container.innerHTML = colleges.map(college => `
//         <div class="college-card" onclick="goToStudents('${college._id}')">
//             <h2>${college.college_name}</h2>
//             <p>Location: ${college.location}</p>
//             <p>Total Students: ${college.total_students}</p>
//         </div>
//     `).join("");
// };

// function goToStudents(collegeId){
//     window.location.href = `student.html?collegeId=${collegeId}`;
// }



// let placeStudent = document.getElementById("placestudent")
// placeStudent.addEventListener("click",()=>{
//     let filterplace = allstudent.filter((ele)=>{
//         return ele.placement_status==="Placed"
//     })
//     console.log(filterplace);
//     displaystudent(filterplace)
    
// })
// let notplaceStudent = document.getElementById("notplacestudent")
// notplaceStudent.addEventListener("click",()=>{
//     let filternotplace = allstudent.filter((ele)=>{
//         return ele.placement_status==="Not Placed"
//     })
//     console.log(filternotplace);
//     displaystudent(filternotplace)
    
// })

// let collegeContainer = document.getElementById("college-container");
// let allColleges;

// let callfromapi = async () => {
//     allColleges = await getcolleges(); // Api.js functionA
//     displayColleges(allColleges);
    
// };
//     // console.log(allColleges);


// callfromapi();

// let displayColleges = (colleges) => {
//     collegeContainer.innerHTML = colleges.map((c) => `
//         <div class="college-card" onclick="goToStudents('${c.college_id}')">
//             <div class="card-box">
//                 <h2>${c.name}</h2>
//                 <p>City: ${c.location.city}</p>
//                 <p>Total Students: ${c.total_students || 'N/A'}</p>
//             </div>
//         </div>
//     `).join("");
// };

// // Optional: Click on card to navigate to student page
// function goToStudents(collegeId){
//     window.location.href = `student.html?collegeId=${collegeId}`;
// }
let collegeContainer = document.getElementById("college-container");
let allColleges = [];

// CALL API
let callfromapi = async () => {
    try {
        allColleges = await getcolleges(); // Api.js function
        displayColleges(allColleges);
        console.log(allColleges);
        
    } catch (err) {
        console.error(err);
    }
};

callfromapi();

// DISPLAY COLLEGES
let displayColleges = (colleges) => {
    collegeContainer.innerHTML = "";

    colleges.forEach((c) => {
        collegeContainer.innerHTML += `
            <div class="college-card" onclick="goToStudents('${c.college_id}')">
                <div class="card-box">
                    <h2>${c.name}</h2>
                    <p>City: ${c.location?.city || "N/A"}</p>
                    <p>Total Students: ${c.total_students || "N/A"}</p>
                </div>
            </div>
        `;
    });
};

// NAVIGATE TO STUDENTS PAGE
function goToStudents(collegeId){
    window.location.href = `student.html?collegeId=${collegeId}`;
}
