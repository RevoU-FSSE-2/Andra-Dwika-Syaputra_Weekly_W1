let contactButton = document.getElementById("contactButton");
let contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function() {
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
        contactButton.textContent = "Hide contact info";
    } else {
        contactInfo.style.display = "none";
        contactButton.textContent = "Contact me";
    }
});
