let currentIndex = 0; // Deklaracja zmiennej currentIndex
let animationId; // Deklaracja zmiennej animationId
let sliderSpeed = 3500; // Deklaracja zmiennej sliderSpeed (przykładowa wartość 3000 ms)

// Pobierz elementy z DOM-u
const brandSlider = document.querySelector('.brand-slider__box'); // Pobierz element brandSlider
const brandLogos = document.querySelectorAll('.brand-slider__brand'); // Pobierz elementy brandLogos

function slideToNext() {
    currentIndex++;
    if (currentIndex >= brandLogos.length) {
        currentIndex = 0; // Wróć do pierwszego logotypu po wyświetleniu ostatniego
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    const newPosition = -currentIndex * (brandLogos[0].offsetWidth + 105); // Przesunięcie o szerokość logotypu + odstęp
    const screenWidth = window.innerWidth; // Pobierz szerokość ekranu

    // Ustaw czas trwania animacji w zależności od szerokości ekranu
    let transitionDuration = '3.5s'; // Domyślny czas trwania animacji
    if (screenWidth > 810) {
        transitionDuration = '6s'; // Czas trwania animacji na większych ekranach
        sliderSpeed = '6000';
    }

    brandSlider.style.transition = `transform ${transitionDuration} linear`;
    brandSlider.style.transform = `translateX(${newPosition}px)`;
}

function startAutoSlide() {
    stopAutoSlide();
    animationId = setInterval(slideToNext, sliderSpeed);
}

function stopAutoSlide() {
    clearInterval(animationId);
}

// Brand Slider - rozpoczęcie automatycznego przesuwania
startAutoSlide();

// Przesunięcie po wyświetleniu ostatniego logotypu
brandSlider.addEventListener('transitionend', () => {
    if (currentIndex === brandLogos.length) {
        currentIndex = 0;
        updateSliderPosition();
    }
});
