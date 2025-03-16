document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const clonedTrack = track.cloneNode(true); // Duplicate for infinite scroll
    track.parentElement.appendChild(clonedTrack);
});
