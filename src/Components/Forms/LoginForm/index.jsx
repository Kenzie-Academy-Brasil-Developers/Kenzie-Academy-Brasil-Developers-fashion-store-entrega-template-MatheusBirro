import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"


export const LoginForm = () => {
    const navigate = useNavigate()
    
    return(
        <div className={styles.container__form}>
            <h2 className={styles.title__2} >ENTRAR</h2>
            <form action="" className={styles.login__form}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <div>
                    <button className={styles.login__btn} >ACESSAR</button>
                    <button onClick={()=> {navigate("/register")}} className={styles.register__btn} >CADASTRE-SE</button>
                </div>
            </form>
        </div>
    )
}