import styles from "./styles.module.scss"
import ArrowBack from "../../../assets/ArrowBack.svg"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaRegister } from "../../FormSchema"
import { UserContext } from "../../../Providers/UserProvider"
import { useContext, useState } from "react"

export const RegisterForm = () => {
    const navigate = useNavigate()
    const {UserRegister} = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaRegister)
    });
    const submit = (payload) => {
        UserRegister(payload, setLoading)
    }

    return (
        <div className={styles.container__form}>
            <div className={styles.container__btn} onClick={()=>{navigate("/")}}>
                <img src={ArrowBack} alt="Seta para voltar" />
                <button className={styles.return__btn}>VOLTAR</button>
            </div>
            <h2 className={styles.title__2} >CADASTRE-SE</h2>
            <p>Seja bem vinto, administrador!</p>
            <form  className={styles.register__form} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="NOME" {...register("name")}/>
                {errors.name ? <small >{errors.name.message}</small> : null }
                <input type="email" placeholder="EMAIL" {...register("email")} />
                {errors.email ? <small >{errors.email.message}</small> : null }
                <input type="password" placeholder="SENHA" {...register("password")}/>
                {errors.password ? <small >{errors.password.message}</small> : null }
                <input type="password" placeholder="CONFIRMAR SENHA" {...register("confirmPassword")}/>
                {errors.confirmPassword ? <small >{errors.confirmPassword.message}</small> : null }
                <div>
                    <button type="submit" className={styles.register__btn} >CADASTRE-SE</button>
                </div>
            </form>
        </div>
    )
}