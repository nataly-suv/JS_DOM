const containerElem = document.getElementById("container");
const addButtonElem = document.getElementById("addButton");
const deletButtonElem = document.getElementById("removeButton");
const cloneButtonElem = document.getElementById("cloneButton");

const boxesElem = document.querySelectorAll(".box");

addButtonElem.addEventListener("click", () => {
  const addNewElem = document.createElement("div");
  addNewElem.classList.add("box");
  addNewElem.innerText = `${boxesElem.length + 1}`;
  containerElem.appendChild(addNewElem);
});

deletButtonElem.addEventListener('click', ()=> {
    const lastElem = containerElem.lastChild;
    lastElem.remove();
})


cloneButtonElem.addEventListener('click', ()=> {
    const lastElem = containerElem.lastChild;
    const cloneElem = lastElem.cloneNode(true);
    containerElem.appendChild(cloneElem);
})
// console.log(boxesElem);

