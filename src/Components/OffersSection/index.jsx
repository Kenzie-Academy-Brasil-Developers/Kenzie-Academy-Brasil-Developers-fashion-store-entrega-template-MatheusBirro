import { useNavigate } from "react-router-dom"
import OffersImg from "../../assets/OffersIMG.png"
import styles from "./styles.module.scss"

export const OffersSection = () => {
    
    const navigate = useNavigate()

    return(
        <div className={styles.offers__container}>
            <img src={OffersImg} alt="Banner de ofertas" className={styles.offers__img} />
            <div>
                <h2>KENZIE FASHION STORE</h2>
                <button onClick={() => {navigate("/login")}}>LOGIN</button>
            </div>
        </div>
    )
}