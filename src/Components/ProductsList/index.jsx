import { useContext, useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "../../Providers/ProductsProvider"
import styles from "./styles.module.scss"

export const ProductList = () => {
    const {productList, loadProducts} = useContext(ProductContext)
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        loadProducts({setLoading}) 
    },[])

    return(
        <>
        {loading? 
            <p>Carregando...</p> :
            <ul className={styles.container__products}>
                {productList.map((product)=>{
                    return(
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
            </ul>
        }
        </>
    )
}