if (document.URL.includes("index.html")) {
  document.addEventListener("scroll", function () {
    let scrollPostion = window.scrollY;
    document.querySelector("#heroSection img").style.top = scrollPostion*0.7 + "px"
    if (scrollPostion < 35) {
      document.querySelector(".navBar").style.backgroundColor = "rgba(11,1,28,0)";
    } else {
      document.querySelector(".navBar").style.backgroundColor = "rgba(11,1,28,1)";
    }
  })
}