let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
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
          display.innerText = "error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
