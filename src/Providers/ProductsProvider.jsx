import { createContext, useState } from "react"
import { FashionStoreApi } from "../Services/api"


export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [product, setProduct] = useState(null)

    const loadProducts = async ({setLoading}) => {
        try {
            setLoading(true)
            const { data } = await FashionStoreApi.get("/products")
            setProductList(data)
        } catch (error) {
            alert("Erro")
        }finally{
            setLoading(false)
        }
    }

    return (
        <ProductContext.Provider value={{ productList, loadProducts, product, setProduct }} >
            {children}
        </ProductContext.Provider>
    )
}