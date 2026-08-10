/* 
DOM accessbusing
   queryselector
   document<...>

   1.get element by Id
     -create a variable assign itto the DOM element with id<div1>
     -console.log this element:view in your browser
     in the browser console you should be able to hover over the element

2.get elemnt by class 
  -create a variable and assign to the DOM elemntwith class<list-item
  -console.log this elemnt: view in the browser
  -in the browser console ypou should be able to hover over the element

3query selector;
  -1.for the id use for(loop) id 
    -create a variable assing to the DOM elemnt with id <div1>
    -console.log this element
    you should be able to hover over it in the vbrowser console
-2.use query selector for the class: hint use <.>
     -create a variable assign to the dom elemnt withclass <list-item>
     -console.log this element 
     -in the browser you should be able to hover over the element
     -Note: you get the array
     -use for loopor while loop to go throughthe array elementsand print each element

*/

const div1 = document.querySelector("#div1");
console.log(div1);

const div2 = document.querySelector("#div1");
console.log(div2);
const listofitems = document.querySelector("fruits");
const queryListOfItems = document.querySelector("fruits");
const queryListOfAllItems = document.querySelectorAll("fruits");

console.log(listofitems);
console.log(queryListOfItems);
console.log(queryListOfAllItems);

for (let i = 0; i < queryListOfAllItems.length; i++) {
  console.log(queryListOfAllItems[i]);
}
const otherfruits = ["kiwi", "papaya", "pears"];
const originalDiv = document.querySelector("#div1").innerHTML;
console.log(originalDiv);

function original() {
  console.log("original clicked");
  document.querySelector("#div1").innerHTML = originalDiv;
}
function replace() {
  console.log("replace clicked");
  const newhtml = `
  <h3>listchores <h3>
   <ul>
      <li class="list-item">clean bathroom</li>
      <li class="list-item">cook</li>
      <li class="list-item">water fetching</li>
    </ul>
  `;
  document.querySelector("#div1").innerHTML = newhtml;
}
function updatefruits() {
  console.log("updatefruits clicked");
  document.querySelector("#div1 h3").textContent = "fruits";
  const fruitlist = document.querySelector("#div1.list");
  for (let f = 0; f < fruitlist.length; f++) {
    fruitlist[f].innertext = otherfruits;
  }
}
