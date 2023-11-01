import { RegisterForm } from "../../Components/Forms/RegisterForn"
import { TemplatePageUnauthenticated } from "../../Components/Templates/TemplatePageUnauthenticated"
import Banner from "../../assets/RegisterBanner.png"
import styles from "./styles.module.scss"

export const RegisterPage = () => {
    return(
        <TemplatePageUnauthenticated>
            <div className={styles.container__register_form}>
                <img src={Banner} alt="Banner de ofertas" className={styles.banner__img} />
                <RegisterForm/>
            </div>
        </TemplatePageUnauthenticated>
    )
}