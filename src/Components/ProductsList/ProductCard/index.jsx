import styles from "./style.module.scss"
import cartProduct from "../../../assets/CartProduct.svg"

export const ProductCard = ({product}) => {
    return(
            <li key={product.id} className={styles.product__card}>
                <img src={product.image} alt={`Imagem do produto, ${product.name}`} className={styles.product__img}/>
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <div>
                    <img src={cartProduct} alt="" />
                    <small>SAIBA MAIS</small>
                </div>
            </li>
    )
}