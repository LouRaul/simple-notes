const entryForm = document.getElementById("entryForm");

const entriesSection = document.querySelector("#entries");

const entryTextBox = document.querySelector(".entryTextBox");
const entriesNav = document.querySelector(".entriesNav");
let noteCounter = 1;

function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement("div");
  entryDiv.className = "singleEntry";
  entryDiv.style.display = "none";
  entryDiv.innerHTML = entryTextBox.value;
  entriesSection.appendChild(entryDiv);
  entryTextBox.value = "";

  const displayEntryButton = document.createElement("button");
  displayEntryButton.className = "display-entry-button";
  displayEntryButton.innerHTML = "Note " + noteCounter;
  entriesNav.appendChild(displayEntryButton);

  displayEntryButton.addEventListener("click", function () {
    const allEntries = document.querySelectorAll(".singleEntry");
    for (i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = "none";
    }
    entryDiv.style.display = "block";
  });
  noteCounter++;
}
entryForm.addEventListener("submit", addEntryToDom);
