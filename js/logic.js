let  upperValue = "0";
let lowerValue = "0";
let button = document.querySelectorAll(".box");
Array.from(buttons).forEach((button) =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            lowerValue = eval(upperValue);
            document.querySelector(".userinput").innerHTML = upperValue;
            document.querySelector(".pcinput").value = lowerValue;
        }
    })
})
