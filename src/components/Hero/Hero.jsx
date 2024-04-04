import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
import { useTranslation } from 'react-i18next'

export const Hero = () => {
    const { t } = useTranslation()

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{t('whoami')}</h1>
            <p className={styles.description}>{t('intro')}</p>
            <a href="mailto:xz353@duke.edu" className={styles.contactBtn}>{t('contactme')}</a>
        </div>
        <img src={getImageUrl("hero/selfie.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}
