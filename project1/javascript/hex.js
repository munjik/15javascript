const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");



btn.addEventListener('click', function() {
  // get random number between 0 - 3
  //invoking getrandomfunciton below
  // const randomNumber = getRandomNumber();
  // document.body.style.backgroundColor = colors[randomNumber];
  // color.textContent = colors[randomNumber];
  // need to add the const hex above to our hexcolor to get a random color
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

// we use the floor to get to the nearest lowest number to know which array()
// to choose from
function getRandomNumber() {
  return Math.floor(Math.random()*hex.length);
}
