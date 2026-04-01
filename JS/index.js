document.addEventListener('DOMContentLoaded', () => {
    
    // --- MAIN NAVIGATION LOGIC ---
    const menuBtns = document.querySelectorAll('.menu-btn');
    const viewPanels = document.querySelectorAll('.view-panel');

    menuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all menu buttons
            menuBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Find target section
            const targetViewId = btn.getAttribute('data-view');
            
            // Hide all panels
            viewPanels.forEach(panel => {
                panel.classList.remove('active-panel');
                panel.style.zIndex = 0; // Send to back
            });

            // Show target panel
            const targetPanel = document.getElementById(targetViewId);
            if(targetPanel) {
                targetPanel.classList.add('active-panel');
                targetPanel.style.zIndex = 10; // Bring to front
            }
        });
    });

});
