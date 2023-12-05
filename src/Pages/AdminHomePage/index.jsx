import { useContext, useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { ProductContext } from "../../Providers/ProductsProvider"
import { TemplateAdminPage } from "../../Components/Templates/TemplatePageAdimin"

export const AdminHomePage = () => {
    const {productList, loadProducts} = useContext(ProductContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadProducts({setLoading})
    },[])

  return (
    <TemplateAdminPage>
      <main className={styles.main__container}>
        <h2>PAINEL DO ADMINISTRADOR</h2>
        <p>Seja bem vindo, Administrador</p>
      </main>
    </TemplateAdminPage>
  )
}