import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"
import { formSchemaLogin } from "../../FormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useState } from "react";
import { UserContext } from "../../../Providers/UserProvider";

export const LoginForm = () => {
    const navigate = useNavigate()
    const {UserLogin} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchemaLogin)
    });
    
    const submit = (payload) => {
        UserLogin(payload, setLoading)
    }
    
    return(
        <div className={styles.container__form}>
            <h2 className={styles.title__2} >ENTRAR</h2>
            <form className={styles.login__form} onSubmit={handleSubmit(submit)}>
                <input type="email" placeholder="EMAIL" {...register("email")}/>
                {errors.email ? <small >{errors.email.message}</small> : null }
                <input type="password" placeholder="SENHA" {...register("password")}/>
                {errors.password ? <small >{errors.password.message}</small> : null }
                <div>
                    <button className={styles.login__btn} type="submit" disabled={loading} >{loading?
                        "CARREGANDO":"ACESSAR"
                    }</button>
                    <button onClick={()=> {navigate("/register")}} className={styles.register__btn} disabled={loading} >CADASTRE-SE</button>
                </div>
            </form>
        </div>
    )
}