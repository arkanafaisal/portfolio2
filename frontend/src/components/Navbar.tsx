import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  currentPage: 'home' | 'detail';
  onBackToHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Navbar({ currentPage, onBackToHome, onNavigateSection }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Sync theme with document class list and localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  // Lock body & html scroll when hamburger menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  const handleLanguageChange = (lang: 'id' | 'en') => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language === 'en' ? 'en' : 'id';

  const menuItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.work'), id: 'work' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (currentPage === 'detail') {
      onBackToHome();
      // Wait for navigation back to home before scrolling
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 100);
    } else {
      onNavigateSection(sectionId);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-border-line bg-card-surface transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-lg items-center justify-between px-6">
          {/* Left Side: Back Button or Logo */}
          {currentPage === 'detail' ? (
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1 text-sm font-semibold text-txt-primary hover:text-txt-secondary transition-colors duration-200"
              aria-label="Back to home"
            >
              <span>←</span> {t('nav.back')}
            </button>
          ) : (
            <button
              onClick={() => onNavigateSection('home')}
              className="text-lg font-extrabold tracking-wider text-txt-primary hover:opacity-80 transition-opacity"
            >
              AW.DEV
            </button>
          )}

          {/* Right Side: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border-line hover:bg-cta-secondary transition-colors duration-200 text-txt-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border-line hover:bg-cta-secondary transition-colors duration-200 text-txt-primary text-xl font-bold"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Expanded Menu Dropdown (Max 50% height on mobile) */}
      {isMenuOpen && (
        <>
          {/* Dimmed backdrop */}
          <div
            onClick={() => setIsMenuOpen(false)}
            onTouchMove={(e) => e.preventDefault()}
            className="fixed inset-0 top-16 z-40 bg-zinc-950/40 dark:bg-black/60 animate-[fadeIn_0.2s_ease-out]"
          />

          {/* Navigation Drawer Container */}
          <nav className="fixed left-0 top-16 z-50 w-full max-h-[50vh] overflow-y-auto border-b border-border-line bg-card-surface px-6 py-4 shadow-lg transition-all duration-200 ease-global">
            <ul className="flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className="w-full text-left text-sm font-bold text-txt-primary hover:text-txt-secondary transition-colors duration-200 py-1.5 block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick Controls: Theme & Language */}
            <div className="mt-3.5 flex flex-col gap-2.5 text-xs font-semibold border-t border-border-line/60 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-txt-secondary">
                  {t('nav.theme')}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => { if (theme === 'dark') toggleTheme(); }}
                    className={`px-2 py-1 rounded border text-[10px] uppercase font-bold transition-all duration-200 ${
                      theme === 'light'
                        ? 'bg-cta-primary text-cta-primary-text border-cta-primary'
                        : 'border-border-line hover:bg-cta-secondary text-txt-primary'
                    }`}
                  >
                    {t('nav.theme_light')}
                  </button>
                  <button
                    onClick={() => { if (theme === 'light') toggleTheme(); }}
                    className={`px-2 py-1 rounded border text-[10px] uppercase font-bold transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-cta-primary text-cta-primary-text border-cta-primary'
                        : 'border-border-line hover:bg-cta-secondary text-txt-primary'
                    }`}
                  >
                    {t('nav.theme_dark')}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-txt-secondary">
                  {t('nav.language')}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => handleLanguageChange('id')}
                    className={`px-2 py-1 rounded border text-[10px] font-bold transition-all duration-200 ${
                      currentLang === 'id'
                        ? 'bg-cta-primary text-cta-primary-text border-cta-primary'
                        : 'border-border-line hover:bg-cta-secondary text-txt-primary'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-2 py-1 rounded border text-[10px] font-bold transition-all duration-200 ${
                      currentLang === 'en'
                        ? 'bg-cta-primary text-cta-primary-text border-cta-primary'
                        : 'border-border-line hover:bg-cta-secondary text-txt-primary'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
