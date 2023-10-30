import logo from "../../../assets/Logo.svg"
import styles from "./styles.module.scss"

export const HeaderUnauthenticated = () => {
    return (
        <header className={styles.header__container}>
            <img src={logo} alt="Logo do site" />
        </header>
    )
}