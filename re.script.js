// document.addEventListener('DOMContentLoaded',function (){
//     let bmanue = document.querySelector('.Manu');
//     let Nav = document.querySelector('.NavInfo')

//     bmanue.addEventListener('click',function () {
//         Nav.classList.toggle('show');
//     });
// });

const menubtn = document.querySelector(".manu-icon span");
        const searchbtn = document.querySelector(".search-icon ");
        const cancelbtn = document.querySelector(".cancel-icon ");
        const items = document.querySelector("ul");
        const form = document.querySelector("form");

        menubtn.onclick = ()=> {
            items.classList.add("active");
            menubtn.classList.add("hide");
            searchbtn.classList.add("hide");
            cancelbtn.style.color = "red";
            cancelbtn.classList.add("show")
        }
        cancelbtn.onclick = ()=> {
            items.classList.remove("active");
            menubtn.classList.remove("hide");
            searchbtn.classList.remove("hide");
            cancelbtn.classList.remove("show");
            cancelbtn.style.color = "red";
            form.classList.remove("active");
        }
    
        searchbtn.onclick = ()=> {
            form.classList.add("active");
            searchbtn.classList.add("hide");
            cancelbtn.classList.add("show");
        }


           /* script.js */
let slideIndex = 0; // start with the first slide
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; 
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // loop back to the first slide
    slides[slideIndex-1].style.opacity = 1;
    slides[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 5000); // Change image every 4 seconds
} 