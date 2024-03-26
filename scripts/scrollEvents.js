let backgroundImg = document.querySelector("#heroSection img");
let navbar = document.querySelector(".navBar");
let interruptor = false;

  document.addEventListener("scroll", function () {
    let scrollPostion = window.scrollY;
    if (scrollPostion < backgroundImg.clientHeight) {
      //console.log("on sight");
      backgroundImg.style.top = scrollPostion*0.7 + "px"
    };
    if (!interruptor && scrollPostion < 35) {
      interruptor = true;
      //console.log("0");
      navbar.style.backgroundColor = "rgba(11,1,28,0)";
    } else if (interruptor && scrollPostion >= 35) {
      navbar.style.backgroundColor = "rgba(11,1,28,1)";
      interruptor = false;
      //console.log("1");
    }
  })
