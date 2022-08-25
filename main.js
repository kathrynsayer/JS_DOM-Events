console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

let node1 = document.getElementById("node1");
node1.textContent = 'I used the getElementById("node1") method to access this';


let node2 = document.getElementsByClassName("node2")[0];

node2.textContent = 'I used the getElementsByClassName("node2") method to access this';


let h3s = document.getElementsByTagName("h3");

for (let h3 of h3s) {
  h3.textContent = 'I used the getElementByTagName("h3") method to access all of these';
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";


let parent = document.querySelector("#parent");

parent.appendChild(p);

let link = document.createElement("a");
link.textContent = "I am a <a> tag";
link.href = "https://google.com";
link.target = "_blank";

parent.insertBefore(link, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let child = document.createElement("p");
child.textContent = "Child Node that replace old child";

let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");


exercise3Container.replaceChild(child, oldChild);


setTimeout(() => {
    exercise3Container.removeChild(child);
  }, 5000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
    "apples",
    "bananas",
    "carrots",
    "dragon fruit",
    "eggplant",
    "fish",
    "grapes",
    "honey",
    "ice bag",
    "juice (any kind)",
  ];

let ul = document.createElement("ul");

list.forEach ((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

document.querySelector("#container").appendChild(ul);


/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

function show() {
   
let modalContainer = document.createElement("div");
let modalCard = document.createElement("div");
let h2 = document.createElement("h2");
let p = document.createElement("p");
let closeButton = document.createElement("button");

h2.textContent = "Modal Header";
p.textContent = "Modal content ok ok";
closeButton.textContent = "Close";

closeButton.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
});





modalCard.append(h2, p, closeButton);
    modalCard.classList.add("modal-card");

modalContainer.id = "modal";
modalContainer.appendChild(modalCard);

document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");

button.addEventListener("click", show);

