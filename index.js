/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.split(':')[0];
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

console.log(greet("11:59")); 
console.log(greet("16:45"));
console.log(greet("19:30"));

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.getElementById('greeting'); 
  greeting.innerText = string;
}
