// i18n translations for NJBL Design website - Modular version
import en from './locales/en.js';
import de from './locales/de.js';
import fr from './locales/fr.js';

// Translations object combining all language modules
const translations = {
    en,
    de,
    fr
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Language configuration
const languages = {
    en: { name: 'English', flag: 'us' },
    de: { name: 'Deutsch', flag: 'de' },
    fr: { name: 'Français', flag: 'fr' }
};

// Initialize i18n
function initI18n() {
    // Apply saved language
    setLanguage(currentLang);
    
    // Update language button
    updateLanguageButton();
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language button
    updateLanguageButton();
}

// Update language button with current flag
function updateLanguageButton() {
    const langButtons = document.querySelectorAll('.language-button img');
    const flagCode = languages[currentLang].flag;
    
    langButtons.forEach(button => {
        button.src = `https://flagcdn.com/w40/${flagCode}.png`;
        button.alt = languages[currentLang].name;
    });
}

// Toggle language dropdown
function toggleLanguageDropdown(event) {
    event.stopPropagation();
    const dropdown = event.currentTarget.nextElementSibling;
    dropdown.classList.toggle('active');
}

// Change language
function changeLanguage(lang) {
    setLanguage(lang);
    // Close all dropdowns
    document.querySelectorAll('.language-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        document.querySelectorAll('.language-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Make functions globally available for onclick handlers
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.changeLanguage = changeLanguage;

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
