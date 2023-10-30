import logo from "../../../assets/Logo.svg"
import Cart from "../../../assets/CarrinhoDeCompras.svg"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"

export const HeaderAuthenticated = () => {
    const navigate = useNavigate()

    return(
        <header className={styles.header__container}>
            <img src={logo} alt="Logo do Site" onClick={() => {navigate("/")}}/>
            <img src={Cart} alt="Carrinho de Compras" />
        </header>
    )
}