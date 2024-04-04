import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation()
    return <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>{t('contact')}</h2>
            <p>{t('reachout')}</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="mailto:xz353@duke.edu"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/si1verbul13tzxc/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" /></a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/Si1verBul13tzxc"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
            </li>
        </ul>
    </footer>
}
