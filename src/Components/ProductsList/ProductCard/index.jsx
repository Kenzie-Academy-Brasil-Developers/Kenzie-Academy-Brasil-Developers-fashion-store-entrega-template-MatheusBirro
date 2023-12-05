import styles from "./style.module.scss"
import cartProduct from "../../../assets/CartProduct.svg"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "../../../Providers/ProductsProvider"

export const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const { setProduct, addProductCart } = useContext(ProductContext)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }
    
    return(
            <li key={product.id} className={styles.product__card}>
                <img src={product.image} alt={`Imagem do produto, ${product.name}`} className={styles.product__img}/>
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <div>
                    <img src={cartProduct} alt="Adicionar ao carrinho" 
                    onClick={() => {
                        addProductCart(product)
                    }}/>
                    <small onClick={() => {
                        scrollToTop()
                        navigate(`/product/${product.name}`)
                        setProduct(product)
                        }} >SAIBA MAIS</small>
                </div>
            </li>
    )
}