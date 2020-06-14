// set initial count
let count = 0;

// slect value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
  // e is just the event function
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if(styles.contains('increase')) {
      count++;
      //reset
    } else {
      count = 0;
    }
    if ( count > 0 ) {
      value.style.color = "green";
    }
    value.textContent = count;
  });
});
