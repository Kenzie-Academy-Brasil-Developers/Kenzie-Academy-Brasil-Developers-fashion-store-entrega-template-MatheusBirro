import { createContext, useState } from "react"
import { FashionStoreApi } from "../Services/api"
import { toast } from "react-toastify"

export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [filteredProductList, setFilteredProductList] = useState([])
    const [product, setProduct] = useState({})

    const loadProducts = async ({setLoading}) => {
        setLoading(true)
        try {
            const { data } = await FashionStoreApi.get("/products")
            setProductList(data)
            setFilteredProductList(data)
        } catch (error) {
            toast("Erro ao carregar os produtos")
        } finally{
            setLoading(false) 
        }
    }

    const renderProducts = async ({setLoading}) => {
        setLoading(true)
        if (Object.keys(product).length != 0) {
            const newFilteredProductList = productList.filter( (products) => products !== product)
            setFilteredProductList(newFilteredProductList)
        }
        setLoading(false)
    }

    return (
        <ProductContext.Provider value={{ productList, renderProducts, product, setProduct, loadProducts, filteredProductList }} >
            {children}
        </ProductContext.Provider>
    )
}