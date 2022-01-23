document.body.innerHTML=`
<div id="button-container">
<h1 id="title">Calculator<h1>
<p id="description">This is a simple calculator</p>
<div id="res"><input type="text" id="result" ></div>
<div id="btns">
<button id="clear">C</button>
        <button id="btnCE">CE</button>
        <button class="btn">%</button>
        <button class="btn" id="div">/</button>
        <button class="btn">7</button>
        <button class="btn">8</button>
        <button class="btn">9</button>
        <button class="btn" id="mul">*</button>       
        <button class="btn">4</button>
        <button class="btn">5</button>
        <button class="btn">6</button>
        <button class="btn" id="subtract">-</button>       
        <button class="btn" id="1">1</button>
        <button class="btn" id="2">2</button>
        <button class="btn" id="3">3</button>
        <button class="btn" id="add">+</button>
        <button class="btn">0</button>
        <button class="btn">00</button>
        <button class="btn"t">.</button>
        <button id="equal">=</button>
</div>
</div>
`;

//select the target element for displaying the data
let display = document.getElementById("result");

//creating key events to the numbers from keyboard

document.addEventListener("keypress", (event) => {
  const keyName = event.key;
if((keyName ==='0')||(keyName ==='1')||(keyName ==='2')||(keyName ==='3')
 ||(keyName ==='4')||(keyName ==='5')||(keyName ==='6')||(keyName ==='7')
 ||(keyName ==='8')||(keyName ==='9'))
  {
    display.value += keyName;
  }
    
else {
  alert("Only numbers are allowed");
}
});

//creating click events to the numbers

const element = document.querySelectorAll(".btn");
for(let i = 0; i<element.length; i++){
  element[i].addEventListener("click", () => {
    display.value +=element[i].innerHTML;
  });
}

//ckeckingoperators logic
function checkOperator() {
  if (
    display.value.endsWith("+") ||
    display.value.endsWith("-") ||
    display.value.endsWith("*") ||
    display.value.endsWith("/") ||
    display.value.endsWith("%")
  ) {
    return true;
  }
}

// logic for implementing operations upon clicking equal to button

let btnEql = document.getElementById("equal");
btnEql.addEventListener("click", function () {
  if(!checkOperator()) {
    let result = eval(display.value);
    display.value = result;
  }
  else{
    alert("last entry must be an operand");
  }
  });

//  logic to crear the screen
let btnClr = document.getElementById("clear");
btnClr.addEventListener("click", function () {
  display.value = "";
});

//Logic for deleting most recent entry   
let btnCE= document.getElementById("btnCE");
btnCE.addEventListener("click", function () {
display.innerHTML = display.innerHTML.split("").slice(0,-1).join("");
});