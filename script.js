document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------------------
    // THEME TOGGLE LOGIC
    // ------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    // Function to apply theme
    function applyTheme(dark) {
        if (dark) {
            document.documentElement.classList.add('dark');
            setIcons('sun'); // Show sun icon when in dark mode (to switch to light)
        } else {
            document.documentElement.classList.remove('dark');
            setIcons('moon'); // Show moon icon when in light mode (to switch to dark)
        }
    }

    // Function to set icons
    function setIcons(type) {
        // We need to re-render lucide icons if we change the data-lucide attribute,
        // but since we are using the <i> tag directly, we can just swap the class/attribute
        // simpler approach: swap the lucide attribute and re-run createIcons

        if (themeIcon) {
            themeIcon.setAttribute('data-lucide', type);
        }
        if (themeIconMobile) {
            themeIconMobile.setAttribute('data-lucide', type);
        }

        // Re-initialize icons to update the SVG
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Initial Apply
    applyTheme(isDark);

    // Toggle Handlers
    function toggleTheme() {
        isDark = !isDark;
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);


    // ------------------------------------------------------
    // MOBILE MENU LOGIC
    // ------------------------------------------------------
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ------------------------------------------------------
    // SCROLL ANIMATIONS
    // ------------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});
