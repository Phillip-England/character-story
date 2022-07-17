import styles from './CloseIcon.module.css'

export default function CloseIcon({
    setMainIcon
}){
    return(
        <div 
            onClick={() => {setMainIcon(true)}} 
            className={`${styles.wrapper} ${styles.animation}`}>
            <i className={`fa-solid fa-x ${styles.icon}`}></i>
        </div>
    )
}