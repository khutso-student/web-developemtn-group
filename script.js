document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const target = bar.getAttribute("data-progress");
        bar.style.width = `${target}%`;
    });
});