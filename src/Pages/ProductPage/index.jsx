import { useContext, useEffect } from "react"
import { TemplatePageAuthenticated } from "../../Components/Templates/TemplatePageAuthenticated"
import { ProductContext } from "../../Providers/ProductsProvider"
import cartProduct from "../../assets/CartProduct.svg"
import { ProductList } from "../../Components/ProductsList"
import styles from "./styles.module.scss"

export const ProductPage = () => {
  const { product } = useContext(ProductContext)

  return (
    <TemplatePageAuthenticated>
      {product ?
        <>
          <h3 className={styles.name__locate} >{`HOME > ${product.name}`}</h3>
          <div className={styles.card__container} >
            <img src={product.image} alt={`Imagem do produto, ${product.name}`} className={styles.card__img} />
            <div className={styles.card__container_information} >
              <h3>{product.name}</h3>
              <p className={styles.card__price} >{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
              <p className={styles.card__description}>{product.description}</p>
              <button>
                <img src={cartProduct} alt="Adicionar ao carrinho" />
                <p>ADICIONAR AO CARRINHO</p>
              </button>
            </div>
          </div>
          <h3 className={styles.title_3} >VEJA TAMBÉM</h3>
          <ProductList />
        </>
        :
        <p>Erro</p>}
    </TemplatePageAuthenticated>
  )
}