// Gear Animations
gsap.to('.gear.large', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
});

gsap.to('.gear.medium', {
    rotation: -360,
    duration: 15,
    repeat: -1,
    ease: "none"
});

gsap.to('.gear.small', {
    rotation: 360,
    duration: 12,
    repeat: -1,
    ease: "none"
});

// Enhanced Typewriter Effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effects
document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.typewriter');
    titles.forEach(title => {
        const text = title.getAttribute('data-text');
        typeWriter(title, text);
    });
});

// Add scroll animations
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-card',
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// Dodaj funkcję tworzącą sześciokąty
document.addEventListener('DOMContentLoaded', function() {
    const numberOfHexagons = 15;
    
    for (let i = 0; i < numberOfHexagons; i++) {
        createHexagon();
    }
});

function createHexagon() {
    const hexagon = document.createElement('div');
    hexagon.className = 'hexagon';
    
    // Losowe pozycje
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    // Losowe rozmiary (50-150% oryginalnego rozmiaru)
    const scale = 0.5 + Math.random();
    
    // Losowa rotacja
    const rotation = Math.random() * 360;
    
    // Losowa animacja
    const animations = ['fadeInOut', 'fadeInOut2', 'fadeInOut3'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    hexagon.style.cssText = `
        left: ${randomX}px;
        top: ${randomY}px;
        transform: scale(${scale}) rotate(${rotation}deg);
        animation: ${randomAnimation} ${3 + Math.random() * 2}s infinite alternate;
    `;
    
    document.body.appendChild(hexagon);
}

// Opcjonalnie: Dodaj nowe sześciokąty przy przewijaniu
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        if (Math.random() > 0.5) { // 50% szans na utworzenie nowego sześciokąta
            createHexagon();
        }
    }, 100);
});

// Opcjonalnie: Dostosuj pozycje przy zmianie rozmiaru okna
window.addEventListener('resize', function() {
    const hexagons = document.querySelectorAll('.hexagon');
    hexagons.forEach(hexagon => {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        hexagon.style.left = `${randomX}px`;
        hexagon.style.top = `${randomY}px`;
    });
}); 