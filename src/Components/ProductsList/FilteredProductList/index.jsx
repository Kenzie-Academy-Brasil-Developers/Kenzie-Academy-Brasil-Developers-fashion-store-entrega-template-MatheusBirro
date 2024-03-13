import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/index"
import styles from "./styles.module.scss"
import { ProductContext } from "../../../Providers/ProductsProvider"

export const FilteredProductList = () => {
    const { renderProducts, product, filteredProductList, loadProducts } = useContext(ProductContext)
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        loadProducts()
        renderProducts({setLoading})
    },[product])

    return(
        <>
        {loading? 
            <p>Carregando...</p> :
            <ul className={styles.container__products}>
                {filteredProductList.map((product)=>{
                    return(
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
            </ul>
        }
        </>
    )
}