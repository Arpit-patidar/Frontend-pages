/* BACKGROUND SLIDER */
const bg = document.querySelector(".bg-slide");
const images =[
    "https://i.ytimg.com/vi/dkmMSN36Hnw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gOCgcMA8=&rs=AOn4CLCWJcOBi8raPYgocW1z7UYDcbDUkQ",
    "https://wallpapers-clan.com/wp-content/uploads/2024/03/lonely-anime-girl-dark-blue-desktop-wallpaper-cover.jpg","https://wallpapers.com/images/featured/anime-iphone-background-psdmm565oizldbbg.jpg","https://img.freepik.com/free-photo/anime-night-sky-illustration_23-2151684328.jpg?semt=ais_hybrid&w=740&q=80","https://m.media-amazon.com/images/I/61cmugCsEaL._AC_UF894,1000_QL80_.jpg"
]

let i = 0;
bg.style.backgroundImage = `url(${images[0]})`;
setInterval(()=>{
  i = (i+1)%images.length;
  bg.style.backgroundImage = `url(${images[i]})`;
},2000);

/* AUTH */
const authModal = document.getElementById("authModal");
const openAuth = document.getElementById("openAuth");
const closeAuth = document.getElementById("closeAuth");
const logoutBtn = document.getElementById("logoutBtn");
const usernameSpan = document.getElementById("username");

openAuth.onclick = ()=> authModal.style.display="flex";
closeAuth.onclick = ()=> authModal.style.display="none";

/* TABS */
loginTab.onclick = ()=>{
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
};

registerTab.onclick = ()=>{
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
};

/* REGISTER */
registerForm.onsubmit = (e)=>{
  e.preventDefault();
  localStorage.setItem("user",
    JSON.stringify({
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value
    })
  );
  alert("Registered Successfully");
};

/* LOGIN */
loginForm.onsubmit = (e)=>{
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  if(user && user.email===loginEmail.value && user.password===loginPassword.value){
    localStorage.setItem("loggedIn",user.name);
    location.reload();
  }else{
    alert("Invalid credentials");
  }
};

/* SESSION */
const loggedUser = localStorage.getItem("loggedIn");
if(loggedUser){
  usernameSpan.innerText = "Welcome, "+loggedUser;
  openAuth.classList.add("hidden");
  logoutBtn.classList.remove("hidden");
}

/* LOGOUT */
logoutBtn.onclick = ()=>{
  localStorage.removeItem("loggedIn");
  location.reload();
};
function loginSuccess(){
   document.querySelector(".cards-section").classList.add("active");
}
