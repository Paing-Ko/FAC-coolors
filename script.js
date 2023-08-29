function generateColors() {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// function generateColors() {
//   const palette = document.getElementById("palette");
//   palette.innerHTML = ""; // Clear the previous colors

//   for (let i = 0; i < 5; i++) {
//     // Generate 5 colors for the palette
//     const color = getRandomColor();
//     const colorBox = document.createElement("div");
//     colorBox.className = "color-box";
//     colorBox.style.backgroundColor = color;
//     palette.appendChild(colorBox);
//   }
// }

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
