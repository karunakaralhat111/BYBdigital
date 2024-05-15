//======================== Counter slate about byb ================>
// var AboutBYBSection= document.querySelector('.about-byb');
// let valueDisplays=AboutBYBSection.querySelectorAll(".counter");
// let interval= 5000;

// valueDisplays.forEach(valueDisplay=> {
//     let startvalue= 0;
//     let endvalue= parseInt(valueDisplay.getAttribute("data-val"))
//     // console.log(endvalue);
//     let duration = Math.floor(interval / endvalue);
//     let counter = setInterval( function() {
//         startvalue +=1;
//         valueDisplay.textContent= startvalue;
//         if(startvalue == endvalue){
//             clearInterval(counter);
//         }
//     }, duration);
// })
//======================== Counter slate about byb ================>

// Function to start countdown animation
function startCountdownAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let valueDisplays = entry.target.querySelectorAll(".counter");
            let interval = 5000; // Interval for the animation

            valueDisplays.forEach(valueDisplay => {
                let startValue = parseInt(valueDisplay.textContent); // Get the current value as start value
                let endValue = parseInt(valueDisplay.getAttribute("data-val")); // Get the target value
                let duration = Math.floor(interval / Math.abs(endValue - startValue)); // Calculate duration for each step
                let counter = setInterval(function () {
                    if (startValue > endValue) { // If counting down
                        startValue -= 1;
                        valueDisplay.textContent = startValue;
                    } else { // If counting up
                        startValue += 1;
                        valueDisplay.textContent = startValue;
                    }
                    if (startValue === endValue) { // Stop the counter when it reaches the target value
                        clearInterval(counter);
                    }
                }, duration);
            });

            // Disconnect observer once animations start
            observer.disconnect();
        }
    });
}

// Create an intersection observer instance
let obs = new IntersectionObserver(startCountdownAnimation, { rootMargin: '0px', threshold: 0 });

// Observe the about-byb section
const aboutBYBSection = document.querySelector('.about-byb');
obs.observe(aboutBYBSection);
