document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const target = bar.getAttribute("data-progress");
        bar.style.width = `${target}%`;
    });
});


function toggleDiv() {
    var div = document.getElementById('hidden-links');
    div.classList.toggle('closed');
    div.classList.toggle('open');
  };