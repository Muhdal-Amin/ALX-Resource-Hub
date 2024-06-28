document.addEventListener("DOMContentLoaded", function () {
  let viewportHeight = 600; //Default viewport height
  let animationSpeed = 4000; // Default animation speed (in milliseconds)

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top <= viewportHeight &&
      bounding.bottom >= 0
    );
  }

  // Function to animate elements when in view
  function animateElementsInView() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const elements = section.querySelectorAll(
        ".animate-on-scroll1, .animate-on-scroll2"
      );

      if (isInViewport(section)) {
        elements.forEach((element) => {
          element.classList.add("in-viewport");
          element.style.animationDuration = `${animationSpeed}ms`;
        });
      } else {
        elements.forEach((element) => {
          element.classList.remove("in-viewport");
        });
      }
    });
  }

  // Initial animation check
  animateElementsInView();

  // Listen for scroll events and recheck animation
  window.addEventListener("scroll", function () {
    animateElementsInView();
  });

  // Function to update viewport height
  function updateViewportHeight(height) {
    viewportHeight = height;
  }

  // Function to update animation speed
  function updateAnimationSpeed(speed) {
    animationSpeed = speed;
  }

  // Example usage:
  // Update viewport height to 600px
  // updateViewportHeight(600);
  
  // Update animation speed to 2000ms
  // updateAnimationSpeed(2000);
});


