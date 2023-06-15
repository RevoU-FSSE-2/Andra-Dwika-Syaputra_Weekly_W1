var contactButton = document.getElementById("contactButton");
var contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function() {
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "flex";
    } else {
        contactInfo.style.display = "none";
    }
});
