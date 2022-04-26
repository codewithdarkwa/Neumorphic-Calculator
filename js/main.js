let display = document.getElementById("display");
let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    button.classList.add("active");
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "DEL":
        {
          if (display.innerText)
            display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
