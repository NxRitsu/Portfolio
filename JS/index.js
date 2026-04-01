document.addEventListener('DOMContentLoaded', () => {
    
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabSections = document.querySelectorAll('.tab-section');
    const indicator = document.querySelector('.nav-indicator');
    const navigation = document.querySelector('.navigation');

    // Function to update the indicator position and width
    function updateIndicator(activeBtn) {
        if(!indicator || !activeBtn) return;
        const btnRect = activeBtn.getBoundingClientRect();
        const navRect = navigation.getBoundingClientRect();
        
        // Calculate relative position based on the scrolling or padding
        const leftPos = btnRect.left - navRect.left + navigation.scrollLeft;
        
        indicator.style.width = `${btnRect.width}px`;
        indicator.style.transform = `translateX(${leftPos}px)`;
    }

    // Initialize indicator on page load
    const initialActiveBtn = document.querySelector('.nav-btn.active');
    if (initialActiveBtn) {
        // Small delay to ensure styles are applied
        setTimeout(() => updateIndicator(initialActiveBtn), 100);
    }

    // Tab click logic
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            // Remove active classes
            navBtns.forEach(b => b.classList.remove('active'));
            tabSections.forEach(s => s.classList.remove('active-tab'));
            
            // Add active class to clicked button
            const clickedBtn = e.target;
            clickedBtn.classList.add('active');
            
            // Show corresponding tab
            const targetId = clickedBtn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active-tab');
            }
            
            // Move indicator
            updateIndicator(clickedBtn);
        });
    });

    // Update indicator on window resize
    window.addEventListener('resize', () => {
        const activeBtn = document.querySelector('.nav-btn.active');
        if (activeBtn) {
            updateIndicator(activeBtn);
        }
    });
});
