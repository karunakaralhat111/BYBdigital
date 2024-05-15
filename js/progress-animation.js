// // Function to animate the progress bars
// function animateProgressBars() {
//     const progressBars = document.querySelectorAll('.progress-score');

//     progressBars.forEach((progressBar, index) => {
//         const widths = [85, 89, 75, 90, 85, 90]; // Widths for each progress bar
//         // const duration = [1000, 2000, 2000, 2500, 3000, 3500]; // Duration for each animation

//         // Animate each progress bar
//         setTimeout(() => {
//             progressBar.style.width = `${widths[index]}%`;
//             progressBar.querySelector('span').textContent = `${widths[index]}%`;
//         }, 1000);
//     });
// }

// // Check if the percent-container is in the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Check if the percent-container is in the viewport and animate progress bars if yes
// function checkAnimation() {
//     const percentContainer = document.querySelector('.percent-container');
//     if (isInViewport(percentContainer)) {
//         animateProgressBars();
//         window.removeEventListener('scroll', checkAnimation);
//     }
// }

// // Add scroll event listener to check if the percent-container is in the viewport
// window.addEventListener('scroll', checkAnimation);
// checkAnimation(); // Check on initial page load
