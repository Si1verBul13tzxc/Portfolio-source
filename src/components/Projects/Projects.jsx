import React from 'react';
import projects from "../../data/projects.json"
import projects_ch from "../../data/projects_ch.json"
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export const Projects = () => {
    const { t } = useTranslation()
    return <section className={styles.container} id='projects'>
        <h2 className={styles.title}>{t('projects')}</h2>
        <div className={styles.projects}>
            {
                i18n.language == 'en' ?
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />
                    })
                    :
                    projects_ch.map((project, id) => {
                        return <ProjectCard key={id} project={project} />
                    })
            }
        </div>
        <div className={styles.bottomBlur} />
        <div className={styles.topBlur} />
    </section>;
}
