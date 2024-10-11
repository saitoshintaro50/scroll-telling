window.addEventListener('scroll', () => {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
        const panelTop = panel.getBoundingClientRect().top;
        if (panelTop < window.innerHeight && panelTop > 0) {
            panel.style.opacity = 1;
        } else {
            panel.style.opacity = 0.5;
        }
    });
});
