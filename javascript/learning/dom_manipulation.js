// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//red paragraph
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red";

container.appendChild(para);

//blue h3
const blueH3 = document.createElement("h3");
blueH3.textContent = "Hey I'm blue h3";
blueH3.style.color = "blue";

container.appendChild(blueH3)

//div with black border and pink background with elements inside: h1 and p

const div = document.createElement("div");
const paraDiv = document.createElement("p");
const h1Div = document.createElement("h1");
h1Div.textContent = "I'm in a div";
paraDiv.textContent = "ME TOO!";

div.appendChild(h1Div);
div.appendChild(paraDiv);

div.style.backgroundColor = "pink";
div.style.borderStyle = "solid";
div.style.borderColor = "black";
div.style.borderWidth = "10px";

container.appendChild(div);

// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// the JavaScript file
const btn_better = document.querySelector('#btn-better');
btn_better.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// METHOD 2
const btnn = document.querySelector("#btnn");
btnn.onclick = alertFunction;

// METHOD 3
const btnnn = document.querySelector("#btnnn");
btnnn.addEventListener('click', alertFunction);

const btn_callback = document.querySelector("#btn-callback");
btn_callback.addEventListener('click', function (e) {
    e.target.style.backgroundColor = "blue";
  });