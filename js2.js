// adding a button //

var button = document.getElementById("exampleButton");
if (button) {
    button.addEventListener("click", function() {
        alert("I hope you enjoy this recipe as much as I do!");
        
    });
}

// adding text to the body //

var newDiv = document.createElement("div");

newDiv.textContent = "Kia's Kitchen Ltd.";
document.body.appendChild(newDiv);


// updating a heading //

function updateHeading() {
    var heading = document.getElementById("coming");
    heading.textContent = "March 1st";
}