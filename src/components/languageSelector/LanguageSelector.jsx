import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import StyleContext from "../../contexts/StyleContext";

const locales = [
  "en-GB", "fr-FR"
];
//  "en-GB", "de-DE", "es-ES", "fr-FR", "it-IT"
//  "en-GB", "ar-SA", "zh-CN", "de-DE", "es-ES", "fr-FR", "hi-IN", "it-IT", "in-ID", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "sv-SE", "fi-FI", "th-TH", "tr-TR", "uk-UA", "vi-VN", "ru-RU", "he-IL"


const getFlagSrc = (countryCode) =>
  /^[A-Z]{2}$/.test(countryCode) ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png` : "";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const { isDark } = useContext(StyleContext);

  const [selectedLocale, setSelectedLocale] = useState(i18n.language || locales[0]);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
    setSelectedLocale(locale);
    setIsOpen(false);
  };

  const intlLocale = new Intl.Locale(selectedLocale);

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div
      className="dropdown"
      onMouseLeave={!isMobileDevice ? () => setIsOpen(false) : undefined}
      onMouseEnter={!isMobileDevice ? () => setIsOpen(true) : undefined}
      onClick={isMobileDevice ? () => setIsOpen(!isOpen) : undefined}
    >
      <button className={isDark ? "dark dropdown-btn" : "dropdown-btn"}>
        <img src={getFlagSrc(intlLocale.region)} alt="flag" className="flag-icon" />
      </button>
      {isOpen && (
        <ul className={isDark ? "dark dropdown-content" : "dropdown-content"}>
          {locales
            .filter((locale) => locale !== selectedLocale)
            .map((locale) => {
              const localeIntl = new Intl.Locale(locale);
              return (
                <li key={locale} className="dropdown-item" onClick={() => changeLanguage(locale)}>
                  <img src={getFlagSrc(localeIntl.region)} alt="flag" className="flag-icon" />
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
