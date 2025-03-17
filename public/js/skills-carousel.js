document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");

    if (track) {
        const clonedTrack = track.cloneNode(true); // Duplicate for seamless infinite scroll
        track.parentElement.appendChild(clonedTrack);
    }
});
