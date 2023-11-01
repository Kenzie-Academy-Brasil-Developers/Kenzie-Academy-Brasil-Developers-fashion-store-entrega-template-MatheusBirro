import { LoginForm } from "../../Components/Forms/LoginForm"
import { TemplatePageUnauthenticated } from "../../Components/Templates/TemplatePageUnauthenticated"
import OffersImg from "../../assets/OffersIMG.png"
import styles from "./styles.module.scss"

export const LoginPage = () => {
    return(
        <TemplatePageUnauthenticated>
            <div className={styles.container__login_form} >
                <img src={OffersImg} alt="Banner de ofertas" className={styles.banner__img} />
                <LoginForm/>
            </div>
        </TemplatePageUnauthenticated>
    )
}