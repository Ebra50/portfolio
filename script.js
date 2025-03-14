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
        if (typeof createHexagon === 'function' && Math.random() > 0.5) {
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

// Inicjalizacja nawigacji
document.addEventListener('DOMContentLoaded', function() {
    // Pobierz wszystkie linki nawigacyjne
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    
    // Pobierz wszystkie sekcje które mają ID i są powiązane z linkami nawigacyjnymi
    const sections = [];
    
    // Mapowanie linków do ich targetów
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            sections.push(targetSection);
        }
    });
    
    // Ustawienie pierwszego linka jako aktywnego na początku
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // Ustawienia dla IntersectionObserver
    const observerOptions = {
        root: null, // viewport
        rootMargin: '-20% 0px -70% 0px', // marginesy wokół viewportu
        threshold: 0 // procent widoczności elementu
    };
    
    // Funkcja wywoływana kiedy elementy wchodzą/wychodzą z viewportu
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            // Jeśli element jest widoczny
            if (entry.isIntersecting) {
                // Znajdź ID sekcji
                const id = entry.target.getAttribute('id');
                
                // Usuń klasę active ze wszystkich linków
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Dodaj klasę active do odpowiedniego linku
                const activeLink = document.querySelector(`.main-nav ul li a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };
    
    // Utwórz obserwator
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Obserwuj wszystkie sekcje
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Obsługa kliknięć w linki nawigacyjne
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Przewiń do sekcji
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Zaktualizuj aktywny link natychmiast
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Funkcja do tworzenia sześciokątów (aby zachować kompatybilność z istniejącym kodem)
    window.createHexagon = function() {
        // Jeśli funkcja nie jest używana, to będzie pusta implementacja aby uniknąć błędów
        console.log("Hexagon creation not implemented");
    };
}); 