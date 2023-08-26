(function() {
    /* global contrastRatio, hexToRgb */
    let bckColor = document.getElementById("background");
    let textColor = document.getElementById("text");

    let display = document.getElementById("display");
    let ratio = document.getElementById("ratio");

    bckColor.value = "#FFFFFF";
    textColor.value = "#000000";

    ratio.innerHTML = contrastRatio(hexToRgb(bckColor.value),hexToRgb(textColor.value));

    bckColor.addEventListener("input", () => {
        console.log(bckColor.value);
        display.style.backgroundColor = bckColor.value;
        ratio.innerHTML = contrastRatio(hexToRgb(bckColor.value),hexToRgb(textColor.value));
    });

    textColor.addEventListener("input", () => {
        console.log(textColor.value);
        display.style.color = textColor.value;
        ratio.innerHTML = contrastRatio(hexToRgb(bckColor.value),hexToRgb(textColor.value));
    });
})();