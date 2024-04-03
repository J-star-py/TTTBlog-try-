
//HEADER FUNCTIONS

function createHeader(classOfNavBar="") {
  let header = document.createElement("header");
  let navBar = document.createElement("nav");
  let logoLink = document.createElement("a");
  let logoImg = document.createElement("img");
  let linksList = document.createElement("ul");
  let hamburgerButton = document.createElement("div");
  let hamburgerClose = document.createElement("div");
  let mobileNavLinks = document.createElement("nav");
  let hamburgerMenu = document.createElement("div");
  let menuDark = document.createElement("div");
  
  menuDark.id = "menuDark";
  hamburgerButton.className = "hamburgerButton";
  hamburgerButton.onclick = mobileMenuOpen;
  hamburgerButton.innerHTML = `
  <div></div>
  <div></div>
  <div></div>`
  
  hamburgerClose.className = "closeButton";
  hamburgerClose.onclick = mobileMenuClose;
  hamburgerClose.innerHTML = "<p>&#10006;</p>";

  mobileNavLinks.innerHTML = `
  <ul>
    <li><a href="index.html">HOME</a></li>
    <li><a href="blogArticles.html">BLOG</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li><a href="contact.html">CONTACT</a></li>
  </ul>`
  hamburgerMenu.className = "hamburgerMenu";

  header.id="primaryNav";
  navBar.className =`navBar ${classOfNavBar}`.trim();

  logoImg.src = "assets(2)/Logo-10.webp";
  logoImg.alt = "Logo"
  logoLink.appendChild(logoImg);
  logoLink.id="logoLink";
  logoLink.href ="index.html"

  linksList.innerHTML = `
  <li><a href="index.html">HOME</a></li>
  <li><a href="about.html">ABOUT</a></li>
  <li><a href="contact.html">CONTACT</a></li>
  <li id="blogNavBarLink"><a href="blogArticles.html">BLOG</a></li>`

  navBar.appendChild(menuDark);
  hamburgerMenu.appendChild(hamburgerClose)
  hamburgerMenu.appendChild(mobileNavLinks);
  navBar.appendChild(logoLink);
  navBar.appendChild(hamburgerButton);
  navBar.appendChild(linksList);
  header.appendChild(navBar);
  header.appendChild(hamburgerMenu);
  document.body.appendChild(header);
}

function mobileMenuOpen(){
  document.querySelector(".hamburgerMenu").style.display = "initial";
  document.querySelector("#menuDark").style.display = "initial";
}
function mobileMenuClose(){
  document.querySelector(".hamburgerMenu").style.display = "none";
  document.querySelector("#menuDark").style.display = "none";
}

//FOOTER FUNCTIONS #########################################

function createFooter(page="") {
  let footer = document.createElement("footer");
  let footerNav = document.createElement("nav");
  let section2 = document.createElement("section");
  let section3 = document.createElement("section");

  let footerShadow = document.createElement("div");
  let footerLogo = document.createElement("img");
  let copyNotice = document.createElement("p");

  footerShadow.id = "footerBottomShadow";
  footerLogo.src = "assets(2)/Logo-10.webp";
  copyNotice.id = "copyrightNotice";
  copyNotice.innerHTML = "&copy; 2024 Tictactoe Guides.";

  footerNav.className = "footerNavLinks";
  
  section2.id = "footerNav2";
  section2.innerHTML = `
  <h2>Browse</h2>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="blogArticles.html">Blog</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>`
  section3.id = "footerNav3";
  section3.innerHTML = `
  <h2>Recommended articles</h2>
    <ul class="recommendedArticles">
      <li>
        <a href="article-1.html">All possible combinations of plays in Tictactoe</a>
      </li>
    </ul>`

  footer.appendChild(footerShadow);
  footer.appendChild(footerLogo);
  if (page === "home") {
    let section1 = document.createElement("section");
    section1.id = "footerNav1";
    section1.innerHTML = `
    <h2>Home page sections</h2>
    <ul>
      <li><a href="#section2">Rules of the game</a></li>
      <li><a href="#section3">What you will find in the blog</a></li>
      <li><a href="#section4">Not sure where to start reading?</a></li>
    </ul>`
    footerNav.appendChild(section1)
  }
  footerNav.appendChild(section2);
  footerNav.appendChild(section3);
  footer.appendChild(footerNav);
  footer.appendChild(copyNotice);
  document.body.appendChild(footer);
}
