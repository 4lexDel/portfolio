import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";
import StyleContext from "../../contexts/StyleContext";

const locales = [
  "en-GB", "de-DE", "es-ES", "fr-FR", "it-IT"
];
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
  const langName = new Intl.DisplayNames([selectedLocale], { type: "language" }).of(intlLocale.language);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className={isDark ? "dark dropdown-btn" : "dropdown-btn"}>
        <img src={getFlagSrc(intlLocale.region)} alt="flag" className="flag-icon" />
        {/* {langName} */}
        <span className="arrow-down">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-content">
          {locales
            .filter((locale) => locale !== selectedLocale)
            .map((locale) => {
              const localeIntl = new Intl.Locale(locale);
              const localeLangName = new Intl.DisplayNames([locale], { type: "language" }).of(localeIntl.language);
              return (
                <li key={locale} className="dropdown-item" onClick={() => changeLanguage(locale)}>
                  <img src={getFlagSrc(localeIntl.region)} alt="flag" className="flag-icon" />
                  {/* {localeLangName} */}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
