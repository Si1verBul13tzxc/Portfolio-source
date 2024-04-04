import React from 'react'
import styles from './DetailModal.module.css'

export const DetailModal = ({ onClose, children }) => {
    const handleButtonClick = (event) => {
        event.stopPropagation();
        return
    }
    return <div className={styles.modal} onClick={onClose}>
        <div className={styles.content} onClick={handleButtonClick}>
            {children}
        </div>
    </div >

}
