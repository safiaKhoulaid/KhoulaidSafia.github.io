import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { locale, changeLocale } = useLanguage();

  return (
    <div className="language-switcher flex items-center gap-2">
      <button
        onClick={() => changeLocale('fr')}
        className={`px-3 py-1 rounded transition-all ${
          locale === 'fr'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => changeLocale('en')}
        className={`px-3 py-1 rounded transition-all ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
