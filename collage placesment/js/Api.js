// let baseURL="https://placementstracker-4.onrender.com/api/students"
let getstudent=async()=>{
    return fetch(`https://placementstracker-4.onrender.com/api/students`).then((res)=>{
        return res.json()
    })
}
let getcolleges=async()=>{
    return fetch(`https://placementstracker-4.onrender.com/api/colleges`).then((res)=>{
        return res.json()
    })
}
let getcompnies=async()=>{
    return fetch("https://placementstracker-4.onrender.com/api/companies").then((res)=>{
        return res.json()
    })
}
let getjobrole=async()=>{
    return fetch("https://placementstracker-4.onrender.com/api/job-roles").then((res)=>{
        return res.json()
    })
}



