import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-[10vh] pb-16 border-b border-border-line/40 flex flex-col items-start">
      <p className="text-sm font-semibold tracking-widest text-txt-secondary uppercase mb-3 flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
        {t('profile.greeting')}
      </p>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-txt-primary leading-[1.15] tracking-tight mb-6">
        {t('profile.role')}
      </h1>
      <p className="mt-4 text-txt-secondary text-lg leading-relaxed max-w-md mb-8">
        {t('profile.intro')}
      </p>
      <div className="mt-8 flex flex-row flex-wrap items-center justify-start gap-4">
        <a 
          href={t('profile.hireMeLink')} 
          className="px-6 py-3 bg-cta-primary text-cta-primary-text font-bold rounded hover:bg-cta-primary-hover transition-colors duration-200 shadow-sm text-sm sm:text-base text-center"
        >
          {t('profile.hireMeText')}
        </a>
        <a
          href={t('profile.cvUrl')}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cta-secondary text-txt-primary font-bold rounded border border-border-line hover:bg-cta-secondary-hover transition-colors duration-200 shadow-sm text-sm sm:text-base text-center"
        >
          {t('profile.cvText')}
        </a>
      </div>
    </section>
  );
}
