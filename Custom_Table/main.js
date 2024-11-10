// main.js

let dragSrc = null;
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const theadCells = thead.rows[0].cells;

// Drag Start
const dragStart = (e) => {
  e.target.classList.add("drag");
  Array.from(theadCells).forEach((th) => th.classList.remove("drop"));
  dragSrc = e.target;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", e.target.cellIndex);
};

// Drag Over
const dragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
};

// Drag Enter
const dragEnter = (e) => {
  e.target.classList.add("over");
};

// Drag Leave
const dragLeave = (e) => {
  e.target.classList.remove("over");
};

// Drag End
const dragEnd = (e) => {
  e.target.classList.remove("drag");
  Array.from(theadCells).forEach((th) => th.classList.remove("over"));
};

// Drop
const drop = (e) => {
  e.stopPropagation();
  e.target.classList.add("drop");

  if (!e.target.isSameNode(dragSrc)) {
    const headers = Array.from(theadCells);
    const targetCellIndex = e.target.cellIndex;
    const cellIndex = e.dataTransfer.getData("text/plain");
    const insertPosition = targetCellIndex > cellIndex ? "afterend" : "beforebegin";

    // Move header cells
    headers[targetCellIndex].insertAdjacentElement(insertPosition, headers[cellIndex]);

    // Move cells in each row of tbody
    Array.from(tbody.rows).forEach((tr) => {
      tr.cells[targetCellIndex].insertAdjacentElement(insertPosition, tr.cells[cellIndex]);
    });
  }

  Array.from(theadCells).forEach((th) => {
    th.classList.remove("drop", "over");
  });
};

// Event Listeners
Array.from(theadCells).forEach((th) => {
  th.addEventListener("dragstart", dragStart);
  th.addEventListener("dragover", dragOver);
  th.addEventListener("dragenter", dragEnter);
  th.addEventListener("dragleave", dragLeave);
  th.addEventListener("dragend", dragEnd);
  th.addEventListener("drop", drop);
});
