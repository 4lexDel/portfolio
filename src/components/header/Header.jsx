import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
} from "../../portfolio";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  const { isDark } = useContext(StyleContext);

  const closeMenu = () => {
    document.getElementById("menu-btn").checked = false;
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/portfolio" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{t(greeting.username)}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills" onClick={closeMenu}>{t("skillsContent.title")}</a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>{t("educationInfo.title")}</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>{t("workExperiences.title")}</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>{t("projects.title")}</a>
          </li>
          <li>
            <a href="https://4lexdel.github.io/Portfolio/assets/src/CV.pdf?lang=en" onClick={closeMenu}>
              {t("resumeSection.title")}
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;