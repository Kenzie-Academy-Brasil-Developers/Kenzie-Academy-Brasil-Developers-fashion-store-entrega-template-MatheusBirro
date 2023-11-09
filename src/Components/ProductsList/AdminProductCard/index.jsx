import styles from "./style.module.scss"
import { useContext } from "react"
import { ProductContext } from "../../../Providers/ProductsProvider"
import editBtn from "../../../assets/EditBtn.svg";
import delteBtn from "../../../assets/DeleteBtn.svg";

export const AdminProductCard = ({product}) => {
    const { setProduct } = useContext(ProductContext)
    
    return(
            <li key={product.id} className={styles.product__card}>
                <img src={product.image} alt={`Imagem do produto, ${product.name}`} className={styles.product__img}/>
                <div className={styles.product__container_description}>
                    <div className={styles.product__container_text}>
                        <h3>{product.name}</h3>
                        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <div className={styles.product__container_btn}>
                        <img src={editBtn} alt="Simbolo de edição" />
                        <img src={delteBtn} alt="Simbolo de lixeira" />
                    </div>
                </div>
            </li>
    )
}