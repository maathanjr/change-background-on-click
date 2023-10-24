let colors = ["#3498db", "#e74c3c", "#27ae60", "#f1c40f"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    const colorBox = document.getElementById("colorBox");
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    colorBox.style.backgroundColor = newColor;
}
