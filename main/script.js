var allPanels = document.querySelectorAll(".panel");

allPanels.forEach((panel) => {
    panel.addEventListener("click", function() {
        document.querySelector(".panel.active").classList.remove("active");
        panel.classList.add("active");
    })
});