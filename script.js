// スクロールイベントを監視してパネルの表示状態を制御
window.addEventListener('scroll', () => {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        const panelTop = panel.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // パネルが画面に入ったら"active"クラスを付与する
        if (panelTop < windowHeight - 100) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
});
