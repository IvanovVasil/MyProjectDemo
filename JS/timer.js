// Setup end date for countdown (getTime == Time in milliseconds)
let countDown = () => {

let countDate = new Date('Oct 10, 2022 14:00:00').getTime();
let now  = new Date().getTime();
//get the difference in time to get the time left until reaches 0
let distance = countDate - now;

// Algorithms to calculate days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));  
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) /
                (1000 * 60));
let seconds = Math.floor ((distance % (1000 * 60)) / 1000); 

document.querySelector('#days').innerHTML = days;
document.querySelector('#hours').innerHTML = hours;
document.querySelector('#minutes').innerHTML = minutes;
document.querySelector('#seconds').innerHTML = seconds;
        }

//setup the timer to every 1 second
setInterval(countDown, 1000);


