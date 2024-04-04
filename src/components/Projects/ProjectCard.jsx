import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";
import { DetailModal } from './DetailModal';
export const ProjectCard = ({ project: { title, imageSrc, description, details, skills, demo, source } }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const [isImageCoverShown, setIsImageCoverShown] = useState(false)
    const showImageCover = () => {
        setIsImageCoverShown(true)
    }
    const hideImageCover = () => {
        setIsImageCoverShown(false)
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} onMouseOver={showImageCover} onMouseLeave={hideImageCover} />
                {isImageCoverShown && <div className={styles.imageCover} onClick={openModal} onMouseOver={showImageCover} onMouseLeave={hideImageCover}>
                    <p>Show Detail</p>
                </div>
                }
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill, id) => {
                    return <li key={id} className={styles.skill}>{skill}</li>
                }
                )}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
            {isModalOpen && <DetailModal onClose={closeModal}>
                <h2>{title}</h2>
                {details.map((bulletPoint, id) => {
                    return <p id={id}>{bulletPoint}</p>
                })}
            </DetailModal>}
        </div>
    )
}
