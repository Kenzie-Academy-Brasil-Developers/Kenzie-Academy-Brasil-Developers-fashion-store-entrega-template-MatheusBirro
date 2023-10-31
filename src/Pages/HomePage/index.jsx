import { ProductList } from "../../Components/ProductsList"
import { TemplatePageAuthenticated } from "../../Components/Templates/TemplatePageAuthenticated"
import styles from "./styles.module.scss"

export const HomePage = () => {
    return(
        <>
            <TemplatePageAuthenticated>
                <p>NOVIDADES</p>
                <h2 className={styles.title_2}>PRODUTOS EM DESTAQUE</h2>
                <ProductList/>
            </TemplatePageAuthenticated>
        </>
    )
}