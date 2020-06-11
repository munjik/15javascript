const colors = ["green", "red", "rgba(133, 122 , 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");



btn.addEventListener('click', function() {
  // get random number between 0 - 3
  //invoking getrandomfunciton below
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

// we use the floor to get to the nearest lowest number to know which array()
// to choose from
function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
}
