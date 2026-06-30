const app = {
    currentScreen: 'screen-splash',
    
    init() {
        setTimeout(() => {
            this.navigateTo('screen-home');
        }, 3000); 
        const stars = document.querySelectorAll('.stars i');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.replace('fa-regular', 'fa-solid');
                        s.classList.add('active');
                    } else {
                        s.classList.replace('fa-solid', 'fa-regular');
                        s.classList.remove('active');
                    }
                });
            });
        });
        const tags = document.querySelectorAll('.feedback-tags .tag');
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.style.background = tag.style.background === 'var(--primary)' ? 'white' : 'var(--primary)';
                tag.style.color = tag.style.background === 'var(--primary)' ? 'white' : 'var(--text-muted)';
                tag.style.borderColor = tag.style.background === 'var(--primary)' ? 'var(--primary)' : '#DDD';
            });
        });
    },

    navigateTo(screenId) {
        document.getElementById(this.currentScreen).classList.remove('active');
        const nextScreen = document.getElementById(screenId);
        nextScreen.classList.add('active');
        this.currentScreen = screenId;

        if (screenId === 'screen-trip') {
            this.startTripProgress();
        }
    },
    startTrip() {
        this.navigateTo('screen-trip');
    },
    startTripProgress() {
        const progressBar = document.getElementById('trip-progress-bar');
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 100); 
        this.tripTimeout = setTimeout(() => {
            this.finishTrip();
        }, 6000);
    },
    finishTrip() {
        clearTimeout(this.tripTimeout);
        this.navigateTo('screen-arrival');
    },
    resetApp() {
        const stars = document.querySelectorAll('.stars i');
        stars.forEach(s => {
            s.classList.replace('fa-solid', 'fa-regular');
            s.classList.remove('active');
        });
        const tags = document.querySelectorAll('.feedback-tags .tag');
        tags.forEach(tag => {
            tag.style.background = 'white';
            tag.style.color = 'var(--text-muted)';
            tag.style.borderColor = '#DDD';
        });
        document.querySelector('textarea').value = '';

        this.navigateTo('screen-home');
    },
    
    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const icon = document.querySelector('#theme-toggle i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    },
    
    toggleSidebar(contentId, iconId) {
        const content = document.getElementById(contentId);
        const icon = document.getElementById(iconId);
        if (content && icon) {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.classList.add('flex');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('hidden');
                content.classList.remove('flex');
                icon.style.transform = 'rotate(180deg)';
            }
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
