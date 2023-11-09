import { useContext, useEffect, useState } from "react"
import { TemplatePageAuthenticated } from "../../Components/Templates/TemplatePageAuthenticated"
import styles from "./styles.module.scss"
import { ProductContext } from "../../Providers/ProductsProvider"
import { AdminProductCard } from "../../Components/ProductsList/AdminProductCard"
import plusBtn from "../../assets/PlusBtn.svg"

export const AdminProductPage = () => {
    const {productList, loadProducts} = useContext(ProductContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadProducts({setLoading})
    },[])

  return (
    <TemplatePageAuthenticated>
      <nav className={styles.menu__container}>
        <button>INÍCIO</button>
        <button>PRODUTOS</button>
      </nav>
      <main className={styles.main__container}>
        <div className={styles.main__description}>
            <div className={styles.description__container}>
                <h2>PRODUTOS</h2>
                <p>Gerencie os produtos do catálogo</p>
            </div>
            <button>
                <img src={plusBtn} alt="Simbolo de adicionar" />
                <p>NOVO PRODUTO</p>
            </button>
        </div>
        <ul>
            {productList.map((product)=>{
                return(
                    <AdminProductCard key={product.id} product={product}/>
                    )
                })}
        </ul>
      </main>
    </TemplatePageAuthenticated>
  )
}