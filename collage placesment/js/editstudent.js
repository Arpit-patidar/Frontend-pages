// let URLid = URLSearchParams(window.location.search)
// let id = URLid.get("id")

// let loadstudent=async()=>{
// let data =await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`)
// let student = await data.json();
// console.log(student.person_info.full_name);

// }
// loadstudent()
// ================= GET STUDENT ID =================
const params = new URLSearchParams(window.location.search);
const studentId = params.get("id");

if (!studentId) {
    alert("Student ID missing!");
    window.location.href = "student.html";
}

// ================= FORM ELEMENTS =================
const form = document.getElementById("studentForm");

const studentname = document.getElementById("studentname");
const studentGender = document.getElementById("studentGender");
const dob = document.getElementById("dob");
const profileimg = document.getElementById("profileimg");

const college = document.getElementById("college");
const department = document.getElementById("department");
const degree = document.getElementById("degree");
const graduation = document.getElementById("graduation");
const cgpa = document.getElementById("cgpa");
const backlogs = document.getElementById("backlogs");

const programming = document.getElementById("programming");
const database = document.getElementById("database");
const tool = document.getElementById("tool");

const placementstudent = document.getElementById("placementstudent");

// ================= LOAD STUDENT =================
async function loadStudent() {
    try {
        const res = await fetch(
            `https://placementstracker-4.onrender.com/api/students/${studentId}`
        );

        const student = await res.json();

        studentname.value = student.personal_info.full_name || "";
        studentGender.value = student.personal_info.gender || "";
        dob.value = student.personal_info.date_of_birth || "";
        profileimg.value = student.personal_info.profile_image || "";

        college.value = student.academic_info.college_id || "";
        department.value = student.academic_info.department || "";
        degree.value = student.academic_info.degree || "";
        graduation.value = student.academic_info.graduation_year || "";
        cgpa.value = student.academic_info.cgpa || "";
        backlogs.value = student.academic_info.backlogs || "";

        programming.value = student.skills.programming.join(", ");
        database.value = student.skills.database.join(", ");
        tool.value = student.skills.tools.join(", ");

        placementstudent.value = student.placement_status;

    } catch (error) {
        console.error(error);
        alert("Error loading student data");
    }
}

loadStudent();

// ================= UPDATE STUDENT =================
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedStudent = {
        personal_info: {
            full_name: studentname.value,
            gender: studentGender.value,
            date_of_birth: dob.value,
            profile_image: profileimg.value
        },
        academic_info: {
            college_id: college.value,
            department: department.value,
            degree: degree.value,
            graduation_year: graduation.value,
            cgpa: cgpa.value,
            backlogs: backlogs.value
        },
        skills: {
            programming: programming.value.split(",").map(s => s.trim()),
            database: database.value.split(",").map(s => s.trim()),
            tools: tool.value.split(",").map(s => s.trim())
        },
        placement_status: placementstudent.value
    };

    try {
        const res = await fetch(
            `https://placementstracker-4.onrender.com/api/students/${studentId}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedStudent)
            }
        );

        if (res.ok) {
            alert("Student updated successfully!");
            window.location.href = "student.html";
        } else {
            alert("Update failed!");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
});
