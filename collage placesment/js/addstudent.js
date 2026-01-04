const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const student = {
        personal_info: {
            full_name: studentname.value,
            gender: studendGender.value,
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
            programming: programming.value.split(","),
            databases: database.value.split(","),
            tools: tool.value.split(",")
        },
        placement_status: placementstudent.value
    };

    try {
        const res = await fetch(
            "https://placementstracker-4.onrender.com/api/students",
            {
                method:"POST",
                headers:{ "Content-Type":"application/json" },
                body: JSON.stringify(student)
            }
        );

        if(res.ok){
            alert("✅ Student Added Successfully");
            studentForm.reset();
        }else{
            alert("❌ Failed to add student");
        }
    } catch (err) {
        console.error(err);
        alert("❌ Server Error");
    }
});
