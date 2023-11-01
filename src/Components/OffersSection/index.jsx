import OffersImg from "../../assets/OffersIMG.png"
import styles from "./styles.module.scss"

export const OffersSection = () => {
    
    return(
        <div className={styles.offers__container}>
            <img src={OffersImg} alt="Banner de ofertas" className={styles.offers__img} />
            <div>
                <h2>KENZIE FASHION STORE</h2>
                <button>CONFIRA MAIS</button>
            </div>
        </div>
    )
}