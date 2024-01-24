import { useContext, useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { ProductContext } from "../../../Providers/ProductsProvider"
import closeBtn from "../../../assets/CloseBtn.svg"

export const CartModal = ({ setCartIsOpen }) => {
  const { cartProductList, priceCart, quantityProductCart, removeProductCart, cartProductListFull, addProductCart, setCartProductListFull, setCartProductList } = useContext(ProductContext)

  useEffect(()=>{
    
  },[cartProductListFull])

  return (
    <div className={styles.modalOverlay} >
      <div className={styles.modalBox}>
        <div className={styles.modal__header}>
          <h3>CARRINHO</h3>
          <button className={styles.closeButton} onClick={() => {setCartIsOpen(false)}}>
            <img src={closeBtn} alt="Botão de fechar" />
          </button>
        </div>
        <ul className={styles.products__container} >
          {cartProductList.map((product) => {
              return(
                <li key={product.id}>
                  <img src={product.image} alt={`Imagem do produto, ${product.name}`} />
                  <div className={styles.product__description_container}>
                    <div className={styles.product__description}>
                      <h3>{product.name}</h3>
                      <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <div className={styles.btn__container}>
                        <p onClick={() =>{removeProductCart(product.id)}}>-</p>
                        <small>{
                        quantityProductCart(product.id)
                        }</small>
                        <p onClick={() =>{addProductCart(product)}}>+</p>
                    </div>
                  </div>
                </li>
              )
            })}
        </ul>
        <div className={styles.total__container} >
          <p>TOTAL <span>{priceCart()}</span></p>
        </div>
      </div>
    </div>
  )
}