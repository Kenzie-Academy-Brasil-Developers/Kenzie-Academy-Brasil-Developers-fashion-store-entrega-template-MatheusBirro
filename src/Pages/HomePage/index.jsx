import { ProductList } from "../../Components/ProductsList"
import { TemplatePageAuthenticated } from "../../Components/Templates/TemplatePageAuthenticated"

export const HomePage = () => {
    return(
        <>
            <TemplatePageAuthenticated>
                <ProductList/>
            </TemplatePageAuthenticated>
        </>
    )
}