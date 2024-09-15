window.addEventListener('load', function() {
    const mockup = document.querySelector('.mockup');
    setTimeout(() => {
        mockup.style.transform = 'translateX(0)';
        mockup.style.opacity = '1';
    }, 500);

    this.setTimeout(() => {
    const featureItems = document.querySelectorAll('.featureItem');
    const transitionDuration = 600; // Transition duration in milliseconds
    const additionalDelay = -300; // Additional delay in milliseconds

    featureItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
        }, index * (transitionDuration + additionalDelay));
    });
    }, 1000);

    const androidBtn = document.querySelector('#androidBtn');
    const iosBtn = document.querySelector('#iosBtn');

    });