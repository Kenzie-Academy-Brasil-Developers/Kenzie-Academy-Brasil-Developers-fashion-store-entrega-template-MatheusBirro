import logo from "../../../assets/Logo.svg"
import Cart from "../../../assets/CarrinhoDeCompras.svg"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"
import { useState } from "react"
import { CartModal } from "../../Modal/CartModal"

export const HeaderAuthenticated = () => {
    const navigate = useNavigate()
    const [cartIsOpen, setCartIsOpen ] = useState(false)
    
    const openModal = () =>{
        console.log("oi");
    }

    return(
        <header className={styles.header__container}>
            <img src={logo} alt="Logo do Site" onClick={() => {navigate("/")}}/>
            <img src={Cart} alt="Carrinho de Compras" onClick={() => {setCartIsOpen(true)}}/>
            {cartIsOpen?
                <CartModal setCartIsOpen={setCartIsOpen}/> :
                null
            }
        </header>
    )
}