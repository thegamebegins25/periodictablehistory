var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function docs() {
  window.open("https://docs.google.com/document/d/1Gz4PHn0TTUuLnntRtjEfsKWWBFz76eB7RxVyjDH57nQ/edit?usp=sharing");
}