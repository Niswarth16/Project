
    const menuBtn = document.createElement("div");
    menuBtn.className = "menu-btn";
    menuBtn.innerHTML = "&#9776;"; // hamburger icon
    document.querySelector("nav").appendChild(menuBtn);

    menuBtn.addEventListener("click", () => {
        document.querySelector(".right ul").classList.toggle("show-menu");
    });

