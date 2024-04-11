let display = document.querySelector(".display");

const input = document.querySelectorAll(".input");
let AC = document.querySelector(".Ac");


// result funtion 
const result = (display) => {
    let expression = display.innerText;
    let data = eval(expression);
    display.innerText = data;
}

AC.addEventListener("click", ()=>{
    display.innerText = "";
});

display.addEventListener("hover" ,()=>{
    
} )

const disp = (takeId) =>{ 
    if(takeId === "add"){
      display.innerText += "+";
}
else if(takeId === "subtract"){
    display.innerText += "-"
}
else if(takeId === "multiply"){
    display.innerText += "*";
}
else if(takeId === "divide"){
    display.innerText += "/";
}
else if (takeId === "=") {
    result(display);
}
 

else{
    display.innerText += takeId;
}
}

input.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Apply style change to the clicked element
        choice.style.opacity = 0.5;

        // Set a timeout to revert the opacity back to its original value after 500 milliseconds (adjust as needed)
        setTimeout(() => {
            choice.style.opacity = ""; // Revert to the original opacity (remove the style)
        }, 180);

        // Continue with your logic
        takeId = choice.getAttribute("id");
        disp(takeId);
    });
});

