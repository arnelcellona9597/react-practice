// src/components/PrimaryButton/PrimaryButtonAnimations.js
export const animateButton = (element) => {
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
};