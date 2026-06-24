import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';

export default function App() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<'home' | 'detail'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProjectId(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div className="min-h-screen bg-bg-main text-txt-primary transition-colors duration-200">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onBackToHome={handleBackToHome}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Container constrained to Mobile-First width (max-w-lg / ~512px) */}
      <main className="mx-auto max-w-lg px-6 pt-24 pb-8">
        {currentPage === 'home' ? (
          <div className="flex flex-col gap-12">
            {/* Section Home */}
            <section id="home" className="py-12 border-b border-border-line/40">
              <h1 className="text-4xl font-extrabold text-txt-primary mb-4">
                {t('profile.name')}
              </h1>
              <p className="text-xl text-txt-secondary">
                {t('profile.role')}
              </p>
              <p className="mt-4 text-txt-secondary leading-relaxed">
                {t('profile.intro')}
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-5 py-2.5 bg-cta-primary text-cta-primary-text font-bold rounded hover:bg-cta-primary-hover transition-colors duration-200 shadow-sm">
                  {t('profile.email')}
                </button>
                <a
                  href={t('profile.cvUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-cta-secondary text-txt-primary font-bold rounded border border-border-line hover:bg-cta-secondary-hover transition-colors duration-200"
                >
                  Get CV
                </a>
              </div>
            </section>

            {/* Section Work */}
            <section id="work" className="py-12 border-b border-border-line/40">
              <h2 className="text-2xl font-extrabold mb-6 tracking-tight">
                {t('testimonial.author')} Proyek
              </h2>
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => handleSelectProject('kasir-mobile')}
                  className="w-full text-left p-6 bg-card-surface border border-border-line rounded-lg hover:border-border-line-hover transition-all duration-200 cursor-pointer shadow-sm group"
                >
                  <h3 className="text-xl font-bold group-hover:text-txt-secondary transition-colors">
                    Aplikasi Kasir Mobile
                  </h3>
                  <p className="mt-2 text-sm text-txt-secondary">
                    Impact: 0% Data Loss (Offline-First)
                  </p>
                </button>
                <button
                  onClick={() => handleSelectProject('sistem-gudang')}
                  className="w-full text-left p-6 bg-card-surface border border-border-line rounded-lg hover:border-border-line-hover transition-all duration-200 cursor-pointer shadow-sm group"
                >
                  <h3 className="text-xl font-bold group-hover:text-txt-secondary transition-colors">
                    Sistem Gudang B2B
                  </h3>
                  <p className="mt-2 text-sm text-txt-secondary">
                    Impact: Load &lt; 1s
                  </p>
                </button>
              </div>
            </section>

            {/* Section Experience */}
            <section id="experience" className="py-12 border-b border-border-line/40">
              <h2 className="text-2xl font-extrabold mb-4 tracking-tight">Experience</h2>
              <p className="text-txt-secondary">Content experience placeholder...</p>
            </section>

            {/* Section Contact */}
            <section id="contact" className="py-12">
              <h2 className="text-2xl font-extrabold mb-4 tracking-tight">Contact</h2>
              <p className="text-txt-secondary">Content contact placeholder...</p>
            </section>
          </div>
        ) : (
          <div className="py-8">
            <h1 className="text-3xl font-extrabold text-txt-primary mb-4">
              Project Detail: {selectedProjectId}
            </h1>
            <p className="text-txt-secondary leading-relaxed">
              Studi kasus detail untuk proyek ini akan ditampilkan di sini.
            </p>
            <button
              onClick={handleBackToHome}
              className="mt-6 px-4 py-2 bg-cta-primary text-cta-primary-text font-bold rounded hover:bg-cta-primary-hover transition-all duration-200"
            >
              ← Kembali ke Beranda
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
