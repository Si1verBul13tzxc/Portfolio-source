import React from 'react'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import history from '../../data/history.json'
import styles from './Experience.module.css'
import { useTranslation } from 'react-i18next'

export const Experience = () => {
    const { t } = useTranslation()
    return <section className={styles.container} id='experience'>
        <h2 className={styles.title}>{t('experience')}</h2>
        <div className={styles.content}>{
            skills.map((skill, id) => {
                return <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                </div>
            })
        }
        </div>
    </section>
}
