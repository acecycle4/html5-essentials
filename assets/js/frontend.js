let toggler = document.querySelector("#menuToggler") 
let mobileNav = document.querySelector(".show-block") 
let closeMobileNav = document.querySelector(".close-toggler") 

// let navbar = document.querySelector(".navbar") 
// let times = document.querySelector(".times")

//Listen to when the toggler is clicked 
toggler.addEventListener("click" , e => {
    // e.target.classList.toggle("fa-close") 
    // e.target.classList.toggle("fa-bars")
    mobileNav.classList.toggle("show-block") 
   
})
if (closeMobileNav){
    closeMobileNav.addEventListener("click" , e => {
        mobileNav.classList.toggle("show-block") 
    })
}
// if (times){
//     times.addEventListener("click" , e => {
//     navbar.classList.remove("active-element")
//     })
// }