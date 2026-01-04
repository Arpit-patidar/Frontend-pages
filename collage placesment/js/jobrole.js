let jobroleContainer = document.getElementById("jobrole-container");
let allJobRoles = [];

// API call
const callfromapi = async () => {
    allJobRoles = await getjobrole();
    displayJobRoles(allJobRoles);
    console.log(allJobRoles);
    
};
callfromapi();

// Display
const displayJobRoles = (roles) => {
    jobroleContainer.innerHTML = roles.map(role => `
        <div class="jobrole-card">
            <p>Rol-Id :${role.role_id}</p>
            <p>Tetel :${role.title}</p>
        </div>
    `).join("");
};

// // Refresh button
// document.getElementById("refreshjobrole").addEventListener("click", () => {
//     displayJobRoles(allJobRoles);
// });
