import { useNavigate } from "react-router-dom"
import logo from "../../../assets/Logo.svg"
import styles from "./styles.module.scss"

export const HeaderUnauthenticated = () => {
    const navigate = useNavigate()

    return (
        <header className={styles.header__container}>
            <img src={logo} alt="Logo do site" onClick={() => navigate("/")}/>
        </header>
    )
}