import styles from './AddIcon.module.css'

export default function AddIcon(){
    return(
        <div className={styles.wrapper}>
            <i className={`fa-solid fa-plus fa-lg ${styles.icon}`}></i>
        </div>
    )
}