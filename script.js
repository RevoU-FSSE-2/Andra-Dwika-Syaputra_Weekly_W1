let contactButton = document.getElementById("contactButton");
let contactInfo = document.getElementById("contactInfo");

contactButton.addEventListener("click", function() {
  if (contactInfo.style.display === "none") {
    contactInfo.style.display = "block"; 
  } else {
    contactInfo.style.display = "none"; 
  }
});
