document.addEventListener('DOMContentLoaded', () => {
    // Анимация при скролле
    const features = document.querySelectorAll('.feature-list li');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    features.forEach(feature => observer.observe(feature));

    // Интерактивная кнопка
    const ctaButton = document.querySelector('.cta-button');
    const originalText = ctaButton.textContent;
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.textContent = 'Прогнозы ждут тебя!';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.textContent = originalText;
    });

    // Таймер обратного отсчёта
    const timerElement = document.getElementById('timer');
    function updateTimer() {
        const now = new Date();
        const nextHour = new Date(now);
        nextHour.setHours(now.getHours() + 1, 0, 0, 0);
        const timeLeft = nextHour - now;
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // Случайный прогноз
    const predictionElement = document.getElementById('prediction');
    const predictions = [
        "Манчестер Сити 2:1 Ливерпуль — 78% вероятность",
        "Реал Мадрид 3:0 Барселона — 85% вероятность",
        "Бавария 4:2 Дортмунд — 72% вероятность",
        "ПСЖ 1:1 Лион — 65% вероятность",
        "Ювентус 2:0 Интер — 80% вероятность"
    ];
    function updatePrediction() {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        predictionElement.textContent = predictions[randomIndex];
    }
    setInterval(updatePrediction, 5000);
    updatePrediction();

    // Анимация живых пользователей
    const userCountElement = document.getElementById('user-count');
    let userCount = 500;
    function updateUserCount() {
        userCount += Math.floor(Math.random() * 5) - 2; // Случайное изменение ±2
        if (userCount < 450) userCount = 450; // Минимальное значение
        if (userCount > 550) userCount = 550; // Максимальное значение
        userCountElement.textContent = userCount;
    }
    setInterval(updateUserCount, 3000);
    updateUserCount();

    // Параллакс-эффект
    const parallaxBg = document.querySelector('.parallax-bg');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Скорость параллакса (0.5 — медленно)
    });
});