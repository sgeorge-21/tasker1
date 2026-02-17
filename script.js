// ==========================================
// Navigation & Authentication
// ==========================================

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function handleLogin() {
    alert('Redirecting to Login Page...\nThis would navigate to the login page.');
    // window.location.href = '/login';
}

function handleSignup() {
    alert('Redirecting to Sign Up Page...\nJoin TASKER now to post tasks or offer services!');
    // window.location.href = '/signup';
}

// ==========================================
// Service-Related Functions
// ==========================================

function handleServiceClick(serviceName) {
    const modal = document.getElementById('serviceModal');
    document.getElementById('modalTitle').textContent = serviceName;
    document.getElementById('modalServiceName').textContent = serviceName;
    modal.style.display = 'block';
}

function handleRequestService() {
    const serviceName = document.getElementById('modalServiceName').textContent;
    alert(`Requesting "${serviceName}" service...\nThis would take you to the service request form.`);
    closeModal();
}

function handleOfferService() {
    const serviceName = document.getElementById('modalServiceName').textContent;
    alert(`Offering "${serviceName}" service...\nThis would take you to create a professional profile.`);
    closeModal();
}

function handleBrowseAllServices() {
    alert('Browsing all 20+ services...\nThis would show all available service categories.');
}

// ==========================================
// Task & Professional Management
// ==========================================

function handlePostService() {
    alert('Ready to post a service request?\nThis will take you to the task posting form.');
    // window.location.href = '/post-task';
}

function handleBrowse() {
    alert('Browsing available services...\nThis would show all service providers in your area.');
    // window.location.href = '/browse';
}

function handleBecomeProf() {
    alert('Want to earn money?\nLearn how to become a professional on TASKER.');
    // window.location.href = '/become-professional';
}

function handleViewTask() {
    alert('Browsing available tasks...\nThis would show tasks that match your skills.');
    // window.location.href = '/browse-tasks';
}

// ==========================================
// Modal Management
// ==========================================

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeModal();
    }
});

// ==========================================
// FAQ Accordion
// ==========================================

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// ==========================================
// App Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    console.log('TASKER Application Initialized');
    console.log('Welcome to TASKER - Service Marketplace!');
}

function setupEventListeners() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const menu = document.querySelector('.nav-menu');
            if (menu) {
                menu.classList.remove('active');
            }
        });
    });

    // Close mobile menu on link click
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
}

// ==========================================
// Utility Functions
// ==========================================

function searchServices(query) {
    const cards = document.querySelectorAll('.service-card');
    const lowerQuery = query.toLowerCase();
    
    cards.forEach(card => {
        const serviceName = card.querySelector('h3').textContent.toLowerCase();
        if (serviceName.includes(lowerQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterServices(category) {
    console.log('Filtering services by category:', category);
}

// ==========================================
// Analytics & Tracking (Optional)
// ==========================================

function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Could integrate with Google Analytics or similar service
}

// Track when user scrolls to different sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            const sectionId = section.getAttribute('id');
            if (sectionId) {
                trackEvent('section_viewed', { section: sectionId });
            }
        }
    });
});
