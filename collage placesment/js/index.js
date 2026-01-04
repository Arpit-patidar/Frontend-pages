const loadDashboard = async () => {
    try {
        let students = await getstudent();
        let colleges = await getcolleges();
        let companies = await getcompnies(); // keep same if API name is this
        let jobroles = await getjobrole();

        document.getElementById("student").innerHTML = `
            <div>
                <h2>${students.length}</h2>
                <p>Total Students</p>
            </div>
        `;

        document.getElementById("colleges").innerHTML = `
            <div>
                <h2>${colleges.length}</h2>
                <p>Total Colleges</p>
            </div>
        `;

        document.getElementById("companies").innerHTML = `
            <div>
                <h2>${companies.length}</h2>
                <p>Total Companies</p>
            </div>
        `;

        document.getElementById("jobrole").innerHTML = `
            <div>
                <h2>${jobroles.length}</h2>
                <p>Total Job Roles</p>
            </div>
        `;
    } catch (err) {
        console.error("Dashboard error:", err);
    }
};

loadDashboard();
