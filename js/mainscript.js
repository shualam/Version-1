/* 
    === JavaScript ===
*/ 

// Greeting function
let date = new Date();
let hour = date.getHours();
let message;

// Insert message content based on the time of the day
if (hour >= 18){
    message = "Good evening!";
} else if (hour >= 12){
    message = "Good afternoon!";
} else if (hour >= 0){
    message = "Good morning!";
} else {
    message = "Hi, I'm Alam!"
}

// Go the DOM and store the main__header--greeting as a variable and insert message;
let greeting = document.querySelector(".main__header--greeting").textContent = message;