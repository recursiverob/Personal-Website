document.addEventListener("DOMContentLoaded", () => {
   
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        
        if (link.getAttribute("href").length > 1) {
          e.preventDefault();
          const targetId = link.getAttribute("href");
          const targetElement = document.querySelector(targetId);
  
          const headerOffset = 60; 
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  
   
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.1
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
  
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const typewriter = document.getElementById('typewriter');
    const words = ['Student', 'Programmer', 'Future Software Engineer'];
    let currentWordIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function typeWriter() {
      if (!isDeleting && currentText !== words[currentWordIndex]) {
        
        currentText = words[currentWordIndex].substring(0, currentText.length + 1);
        typewriter.textContent = currentText;
        setTimeout(typeWriter, 100); 
      } else if (!isDeleting && currentText === words[currentWordIndex]) {
        
        isDeleting = true;
        setTimeout(typeWriter, 2000); 
      } else if (isDeleting && currentText !== '') {
        
        currentText = currentText.substring(0, currentText.length - 1);
        typewriter.textContent = currentText;
        setTimeout(typeWriter, 50); 
      } else {
        
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeWriter, 500);
      }
  
      
      if (currentText === words[currentWordIndex]) {
        typewriter.classList.add('blinking');
      } else {
        typewriter.classList.remove('blinking');
      }
    }
  
    typeWriter();
  });
  
