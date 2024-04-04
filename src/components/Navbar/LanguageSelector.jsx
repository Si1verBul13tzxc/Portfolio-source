import React from 'react'
import i18n from '../../i18n'
import { useState } from 'react'
import styles from './LanguageSelector.module.css'

export const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }
    return <select defaultValue={selectedLanguage} onChange={chooseLanguage} className={styles.selector}>
        <option value="ch">中文</option>
        <option value="en">English</option>
    </select>
}
