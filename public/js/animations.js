document.addEventListener("DOMContentLoaded", () => {
    // Flip card animation
    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.querySelector(".card-content").style.transform = "rotateY(180deg)";
        });

        card.addEventListener("mouseleave", () => {
            card.querySelector(".card-content").style.transform = "rotateY(0deg)";
        });
    })
});