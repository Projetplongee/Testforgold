
document.addEventListener("DOMContentLoaded", () => {
    const goldBar = document.querySelector(".gold-bar");

    function randomizeShimmer() {
        const randomTime = Math.random() * 3 + 2; // Temps aléatoire entre 2 et 5 secondes
        goldBar.style.animationDuration = `${randomTime}s`;
    }

    setInterval(randomizeShimmer, 5000); // Modifier la durée aléatoirement toutes les 5 secondes
});
