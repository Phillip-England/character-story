import styles from './Header.module.css'

export default function Header() {
    return(
            <h1 className={`${styles.header} headerUnderline`}>Character Story</h1>
    )
}