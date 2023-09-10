let cc = document.getElementById("cardcontainer");

let person = {
  Email: "sanketgupta1000@gmail.com",
  Phone: "1234567890",
  DOB: "DD-MM-YYYY"
};

let img = document.createElement("img");
img.src = "images/img.jpeg";

let card = new Card(person, "Sanket", img, cc);
