/**
 * Reading Progress Bar
 * Updates the progress bar based on scroll position
 */
(function() {
    'use strict';

    function initReadingProgress() {
        // Check if we're on a page or new-page layout by checking for main content elements
        const hasPageTitle = document.querySelector('main .page-title') !== null;
        const hasPostContent = document.querySelector('.post-content') !== null;
        const hasMainContent = document.querySelector('main') !== null && 
                               (document.querySelector('main').textContent.trim().length > 100);

        // Only show on pages with substantial content (page or new-page layouts)
        if (!hasPageTitle && !hasPostContent && !hasMainContent) {
            return;
        }

        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress-bar';
        progressBar.innerHTML = '<div class="reading-progress-bar-fill"></div>';
        document.body.appendChild(progressBar);

        const progressFill = progressBar.querySelector('.reading-progress-bar-fill');

        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Calculate total scrollable height
            const scrollableHeight = documentHeight - windowHeight;
            
            // Calculate progress percentage
            const progress = scrollableHeight > 0 
                ? (scrollTop / scrollableHeight) * 100 
                : 0;
            
            // Clamp between 0 and 100
            const clampedProgress = Math.min(100, Math.max(0, progress));
            
            // Update the width of the progress bar
            progressFill.style.width = clampedProgress + '%';
        }

        // Update on scroll
        let ticking = false;
        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        
        // Initial update
        updateProgress();
        
        // Update on resize (in case content changes)
        window.addEventListener('resize', updateProgress, { passive: true });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReadingProgress);
    } else {
        initReadingProgress();
    }
})();

