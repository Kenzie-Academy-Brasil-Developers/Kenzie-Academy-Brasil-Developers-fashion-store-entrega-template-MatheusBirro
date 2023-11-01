import styles from "./styles.module.scss"
import ArrowBack from "../../../assets/ArrowBack.svg"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.container__form}>
            <div className={styles.container__btn} onClick={()=>{navigate("/")}}>
                <img src={ArrowBack} alt="Seta para voltar" />
                <button className={styles.return__btn}>VOLTAR</button>
            </div>
            <h2 className={styles.title__2} >CADASTRE-SE</h2>
            <p>Seja bem vinto, administrador!</p>
            <form action="" className={styles.register__form}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar Senha" />
                <div>
                    <button className={styles.register__btn} >CADASTRE-SE</button>
                </div>
            </form>
        </div>
    )
}