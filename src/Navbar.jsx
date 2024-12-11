import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">{t('navbar.home')}</Link></li>
                <li><Link to="/products">{t('navbar.products')}</Link></li>
                <li><Link to="/about">{t('navbar.about')}</Link></li>
                <li>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                    <button onClick={() => changeLanguage('ru')}>RU</button>
                </li>
            </ul>
            <input type="text" placeholder={t('search')} />
        </nav>
    );
};

export default Navbar;
