const companiecontainer = document.getElementById("companie-container");
const searchInput = document.getElementById("searchInput");
const addBtn = document.getElementById("add");

let allcompanies = [];

// ================= FETCH =================
async function callfromapi() {
    try {
        const res = await getcompnies();
        allcompanies = Array.isArray(res) ? res : res.data;
        displaycompanies(allcompanies);
    } catch (err) {
        console.error(err);
        companiecontainer.innerHTML = "<h2>Error loading companies</h2>";
    }
}

callfromapi();

// ================= DISPLAY =================
function displaycompanies(companies) {
    companiecontainer.innerHTML = "";

    companies.forEach(ele => {
        const div = document.createElement("div");
        div.className = "companies-card";

        div.innerHTML = `
            <div class="card-box">
                <div>
                    <h3>${ele.name}</h3>
                    <p>${ele.industry}</p>
                    <p>ID: ${ele.company_id}</p>
                </div>

                <button class="delete-btn">Delete</button>
            </div>
        `;

        div.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            deleteCompany(ele.company_id);
        });

        companiecontainer.appendChild(div);
    });
}

// ================= SEARCH =================
searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    const filtered = allcompanies.filter(c =>
        c.name.toLowerCase().includes(q)
    );
    displaycompanies(filtered);
});

// ================= ADD =================
addBtn.addEventListener("click", () => {
    window.location.href = "aadcompni.html";
});

// ================= DELETE =================
async function deleteCompany(companyId) {
    console.log("Deleting:", companyId);

    if (!companyId) {
        alert("❌ Company ID missing");
        return;
    }

    if (!confirm("Are you sure?")) return;

    try {
        const res = await fetch(
            `https://placementstracker-4.onrender.com/api/companies/${companyId}`,
            { method: "DELETE" }
        );

        console.log("Delete status:", res.status);

        if (res.ok) {
            alert("✅ Company Deleted");

            allcompanies = allcompanies.filter(
                c => c.company_id !== companyId
            );

            displaycompanies(allcompanies);
        }
    } catch (err) {
        console.error(err);
    }
}

