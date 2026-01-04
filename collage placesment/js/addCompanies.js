const companyForm = document.getElementById("companyForm");

companyForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const company = {
        name: companyname.value,
        industry: companytype.value,
        location: location.value,
        website: website.value,
        status: companystatus.value
    };

    try {
        const res = await fetch(
            "https://placementstracker-4.onrender.com/api/companies",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(company)
            }
        );

        if (res.ok) {
            alert("Company Added");
            window.location.href = "companies.html";
        } else {
            alert("Failed");
        }
    } catch (err) {
        console.error(err);
    }
});
async function deleteCompany(companyId) {
    const confirmDelete = confirm("Are you sure you want to delete this company?");
    if (!confirmDelete) return;

    try {
        const res = await fetch(
            `https://placementstracker-4.onrender.com/api/companies/${companyId}`,
            { method: "DELETE" }
        );

        if (res.ok) {
            alert("✅ Company Deleted");
            allcompanies = allcompanies.filter(c => c.company_id !== companyId);
            displaycompanies(allcompanies);
        } else {
            alert("❌ Delete Failed");
        }
    } catch (err) {
        console.error(err);
        alert("❌ Server Error");
    }
}
