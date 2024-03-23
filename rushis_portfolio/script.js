// Function to check if element is in viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to start animations when elements are in view
  function startAnimationIfInView() {
    var green1 = document.getElementById('green1');
    var gcircle1 = document.getElementById('gcircle1');
    var green1 = document.getElementById('green2');
    var gcircle1 = document.getElementById('gcircle2');
    var green1 = document.getElementById('green3');
    var gcircle1 = document.getElementById('gcircle3');
    
    if (isElementInViewport(green1) && isElementInViewport(gcircle1)) {
      green1.classList.add('animate');
      gcircle1.classList.add('animate');
      green2.classList.add('animate');
      gcircle2.classList.add('animate');
      green3.classList.add('animate');
      gcircle3.classList.add('animate');

      window.removeEventListener('scroll', startAnimationIfInView);
    }
  }
  
  // Listen for scroll events and start animation when elements are in view
  window.addEventListener('scroll', startAnimationIfInView);
  