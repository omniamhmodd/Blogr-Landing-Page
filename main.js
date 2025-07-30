let menuBtn = document.querySelector(".menu");
let mobileList =document.querySelector(".mobile");
let closeIcon = document.querySelector(".img1");


menuBtn.addEventListener('click', () => {
mobileList.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
mobileList.classList.add('hidden');
});

let headLinks = document.querySelectorAll(".headLink");

headLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // نجيب العنصر الأب (div.linkk)
    let parentDiv = this.closest(".linkk");

    // نجيب الـ spans اللي جوا العنصر الأب
    let spans = parentDiv.querySelector(".spans");

    // نعمل toggle للظهور والاختفاء
    if (spans.style.display === "none" ) {
      spans.style.display = "flex";
    } else {
      spans.style.display = "none";
    }
  });
});
let mobileLink = document.querySelectorAll(".mobilelink")
mobileLink.forEach(lnk =>{
  lnk.addEventListener("click", function(e){
    e.preventDefault();
    let prntDiv = this.closest(".linkk")
    let mobSpans = prntDiv.querySelector(".spans")
    if(mobSpans.style.display === "none"){
      mobSpans.style.display = "flex"
    }else{
      mobSpans.style.display = "none"
    }
  })
})
