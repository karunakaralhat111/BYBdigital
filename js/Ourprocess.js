   // <=================================  Our Process =========================================>
// Function to start animations when timeline section comes into view
function startAnimations(entries) {
    entries.forEach(entry => {
        console.log(entry)
      if (entry.isIntersecting) {
        // Start timeline animations
        document.querySelectorAll('.textbox-container').forEach((box, index) => {
          box.style.animationDelay = `${index + 1}s`;
          box.classList.add('animate');
        });
  
        document.querySelector('.timeline').classList.add('animate-line');
        // Disconnect observer once animations start
        observer.disconnect();
      }
    });
  }
  
  // Create an intersection observer instance
  const observer = new IntersectionObserver(startAnimations, { rootMargin: '0px', threshold: 0.5 });
  
  // Observe the timeline section
  observer.observe( document.querySelector('.timeline'));
  
 