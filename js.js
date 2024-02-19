// smooth scroll //

document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});


// carousel //

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth";
});


backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior = "smooth";
});


// up button //

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }

    })




// print page //

function printPage() {
    window.print();
}




// form //


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var commentInput = document.getElementById("comment");
    var smiley = ("&#128512;");

    var name = nameInput.value;
    var email = emailInput.value;
    var comment = commentInput.value;

    nameInput.setAttribute("autocomplete", "name");
    emailInput.setAttribute("autocomplete", "email");

    if (!name || !email || !comment) {
        alert("Please fill in all fields");
        return;
    }


    var popup = document.createElement("div");
    popup.innerHTML = "Thank you, " + name + "! Your comment has been submitted! " + smiley;
    popup.classList.add("popup");


    var popupContainer = document.getElementById("popupContainer");
    popupContainer.appendChild(popup);

    popup.style.display = "block";


    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);
});