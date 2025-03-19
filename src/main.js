import './style.css';

// Theme Management - Automatically follow system settings
function initTheme() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply dark mode based on system preference
  if (prefersDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Initialize theme immediately on load
initTheme();

// Listen for system theme changes and apply them dynamically
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initTheme);

// Set up all interactive elements after the DOM loads


tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        }
      }
    }
  }
}
  document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

        if (isVisible) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
  });

document.addEventListener('DOMContentLoaded', function() {
  // Check if URL has a hash
  if(window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if(targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // For links clicked on the page
  document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
      if(this.pathname === window.location.pathname) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);
        
        if(targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, null, '#' + targetId);
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("[data-collapse-toggle='navbar-sticky']");
  const navbarMenu = document.getElementById("navbar-sticky");

  toggleButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("hidden");
  });
});