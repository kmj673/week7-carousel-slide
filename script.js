// grab the prev,next button, slides and slider with queryselector
prevButton = document.querySelector(".prev-button");
nextButton = document.querySelector(".next-button");
slides = document.querySelector(".slide-container").children;

index = document.querySelector(".slider");

//button
// get button clicked
prevButton.addEventListener("click", updatePrev);
nextButton.addEventListener("click", updateNext);

// update the slide for each button
function updatePrev() {
  console.log("this is prev button");
}

function updateNext() {
  console.log(`this is next button`);
}

//slider
// get images number and slider's location value
