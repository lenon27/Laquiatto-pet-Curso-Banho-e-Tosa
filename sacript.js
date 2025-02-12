document.getElementById("toggleButton").addEventListener("click", function () {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        this.textContent = "Mostrar Menos...";
    } else {
        hiddenText.style.display = "none";
        this.textContent = "Saiba Mais...";
    }
});