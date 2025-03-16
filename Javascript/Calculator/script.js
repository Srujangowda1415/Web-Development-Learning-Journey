const display=document.querySelector('.display');
const buttons=document.querySelectorAll('button.btn');

// buttons.forEach(btn => {
//     button.btn.addEventListener("click", () => {
//         if (btn.value === "C") {
//             display.value = ""; // Clear the display
//         } else {
//             display.value += btn.value; // Append number to display
//         }
//     });
// });



buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.getAttribute("data-value");

    if (value === "C") {
      display.textContent = "0"; // Clear display
    } else if (value === "DEL") {
      display.textContent = display.textContent.slice(0, -1) || "0"; // Remove last character
    } else if (value === "=") {
      try {
        display.textContent = eval(display.textContent); // Evaluate the expression
      } catch {
        display.textContent = "Error"; // Handle invalid expressions
      }
    } else {
      if (display.textContent === "0" && value !== ".") {
        display.textContent = value; // Replace 0 with first input
      } else {
        display.textContent += value; // Append number/operator
      }
    }
  });
});
