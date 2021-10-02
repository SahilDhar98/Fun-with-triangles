var inputs = document.querySelectorAll(".angle-input");
var btn = document.querySelector("#is-tri-btn");
var output = document.querySelector("#output");

function isTriangle(){
    var sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);
    


    if (sum === 180){
        output.innerText = "Is triangle";
    }
    else
    {
        output.innerText = "Not a triangle";
    }
}

btn.addEventListener("click", isTriangle )