// let heading = document.getElementById("heading")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//   heading.textContent = "Button Click Ho Gaya!"
//     heading.style.color = "red"
//     heading.style.color = "red"
//     heading.style.fontSize = "50px"
//     heading.style.backgroundColor = "yellow"

// })

// let nameInput = document.getElementById("nameInput")
// let greetBtn = document.getElementById("greetBtn")
// let greetText = document.getElementById("greetText")

// greetBtn.addEventListener("click",function(){
//   let naam = nameInput.value
//   greetText.textContent = `Hello ${naam}! Welcome to JavaScript!`
// })

// let count = 0
// let counter = document.getElementById("counter")
// function countColor(){
//     if(count > 0) {
//     counter.style.color = "green"
// } else if(count < 0) {
//     counter.style.color = "red"
// } else {
//     counter.style.color = "black"
// }
// }
// document.getElementById("increasBtn").addEventListener("click", function(){
//   count++
//   counter.textContent = count
// countColor()
// })

// document.getElementById("decreasBtn").addEventListener("click", function(){
//   count--
//   counter.textContent =count
//   countColor()
// })
//  document.getElementById("resetBtn").addEventListener("click", function(){
//   count = 0
//   counter.textContent =count
//   countColor()
//  })
// let colorText = document.getElementById("colorText")
// document.getElementById("redBtn").addEventListener("click", function(){
//     colorText.style.color = "red"
//     colorText.textContent = "Red color choose kiya!"
// })

// document.getElementById("greenBtn").addEventListener("click", function(){
//   colorText.style.color = "green"
//   colorText.textContent = "Green color choose kiya!"
// })

// document.getElementById("blueBtn").addEventListener("click", function(){
//   colorText.style.color = "blue"
//   colorText.textContent = "Blue Color Choose kiya!"
// })

// localStorage.setItem("naam","Junaid");
// let naam = localStorage.getItem("naam");
// console.log(naam)

// window.onload = function() {
//     let savedNaam = localStorage.getItem("userName")
//     if(savedNaam) {
//         document.getElementById("savedName").textContent = `Welcome back: ${savedNaam}`
//     }
// }




// document.getElementById("saveBtn").addEventListener("click", function(){
//   let naam = document.getElementById("nameInput").value
//   localStorage.setItem("userName", naam)
//   alert("Naam Save Ho Gaya!")
// })

// document.getElementById("loadBtn").addEventListener("click", function(){
//   let naam = localStorage.getItem("userName")
//   document.getElementById("savedName").textContent = `Save Name: ${naam}`
// })

// document.getElementById("saveBtn").addEventListener("click", function(){
//   let naam = document.getElementById("inputText").value
//   localStorage.setItem("userName", naam)
//   alert("Naam Save ho gaya")
// })

// document.getElementById("loadBtn").addEventListener("click", function(){
//   let naam = localStorage.getItem("userName")
//   document.getElementById("view").textContent = `Save Name: ${naam}`
// })
// Ye upar add karo
// window.onload = function() {
//     let savedTask = localStorage.getItem("toDo")
//     if(savedTask) {
//         document.getElementById("writeHere").innerText = `Task: ${savedTask}`
//     }
// }

// document.getElementById("taskBtn").addEventListener("click", function(){

// let task = document.getElementById("inputValue").value
// localStorage.setItem("toDo", task)
// let savedTask = localStorage.getItem("toDo")
// document.getElementById("writeHere").innerText = `Task: ${savedTask}`
// })
// let isDark = false

// document.getElementById("themeBtn").addEventListener("click", function(){
//     if(isDark === false){
//         document.body.style.backgroundColor = "black"
//         document.body.style.color = "white"
//         document.getElementById("themeBtn").textContent ="Light Mode"
//         isDark = true
//         localStorage.setItem("theme", "dark")
//     }

//     else{
//         document.body.style.backgroundColor = "white"
//         document.body.style.color = "black"
//         document.getElementById("themeBtn").textContent = "Dark Mode"
//         isDark = false
//         localStorage.setItem("theme", "light")
//     }
// })



// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data)
//     })

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(`Naam: ${data.name}`)
//         console.log(`Email: ${data.email}`)
//         console.log(`City: ${data.address.city}`)
//     })

// document.getElementById("fetchBtn").addEventListener("click", function() {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             document.getElementById("userCard").innerHTML = `
//                 <h2>${data.name}</h2>
//                 <p>Email: ${data.email}</p>
//                 <p>City: ${data.address.city}</p>
//                 <p>Phone: ${data.phone}</p>
//             `
//         })
// })


    // document.getElementById("fetchBtn").addEventListener("click", function(){
    //     fetch("https://jsonplaceholder.typicode.com/users/2").then(function(response){
    //         return response.json()
    //     })
    //     .then(function(data){
    //         document.getElementById("userCard").innerHTML = `
    //         <p> Naam: ${data.name}</p>
    //         <p> Email: ${data.email}</p>
    //         <p> Phone: ${data.phone}</p>
    //         `
    //     })
    // })

    // Math.floor(Math.random() * 10) + 1;

//     async function getWeather() {
//     try {
//         // await: ruko jab tak API jawab na de
//         const response = await fetch("https://api.weather.com/karachi");
        
//         // await: ruko jab tak JSON ready na ho
//         const data = await response.json();
        
//         console.log("Temperature:", data.temp);
        
//     } catch (error) {
//         // agar kuch bhi galat hua — yahan aao
//         console.log("Error aaya:", error.message);
//     }
// }

// getWeather();

// // async function userinfo() {

// //     try{
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
// //     const data = await response.json();
// //     console.log("")
//     }
    
// }

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Ali", function() {
//   console.log("Done");
// });

// async function getUser() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         let data = await response.json();
//         console.log(data.name)
//     } catch(error) {
//         console.log("Error agaya:", error.message);
//     }
// }


        // async function getUser() {
        //     try{
        //         let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        //         let data = await response.json()
        //         console.log(data.name)
        //         }  
        //     catch(error){
        //         console.log("Error agaya:", error.message);
        //                 }
            
        //                         }
        //         getUser();



async function getWeather(city) {
    try {
        let response = await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();
        
        let temp = data.current_condition[0].temp_C;
        let humidity = data.current_condition[0].humidity;
        let desc = data.current_condition[0].weatherDesc[0].value;
        localStorage.setItem("lastCity", city);
        result.innerHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Weather: ${desc}</p>
`;
        
    } catch(error) {
        console.log("Error:", error.message);
    }
}

searchBtn.addEventListener("click", function() {
    const city = cityInput.value;
    getWeather(city);
});


const lastCity = localStorage.getItem("lastCity");
if(lastCity) {
    cityInput.value = lastCity;
    getWeather(lastCity);
}