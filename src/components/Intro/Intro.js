import styles from './Intro.module.css'

export default function Intro({
    title,
    body
}) {
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Who will you become?</h2>
            <p className={styles.body}>Small decisions make for a big future</p>
        </div>
    )
}