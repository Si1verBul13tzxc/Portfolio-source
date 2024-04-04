import { useState } from 'react'
import React from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'
import { LanguageSelector } from './LanguageSelector'
import { useTranslation } from 'react-i18next'
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation()

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">{t('portfolio')}</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li>
                        <a href="#about">{t('about')}</a>
                    </li>
                    <li>
                        <a href="#experience">{t('experience')}</a>
                    </li>
                    <li>
                        <a href="#projects">{t('projects')}</a>
                    </li>
                    <li>
                        <a href="#contact">{t('contact')}</a>
                    </li>
                    <li>
                        <LanguageSelector />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
