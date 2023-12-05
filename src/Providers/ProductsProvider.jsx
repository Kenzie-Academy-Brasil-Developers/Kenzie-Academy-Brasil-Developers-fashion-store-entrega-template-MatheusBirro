import { createContext, useState } from "react"
import { FashionStoreApi } from "../Services/api"
import { toast } from "react-toastify"

export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [filteredProductList, setFilteredProductList] = useState([])
    const [cartProductListFull, setCartProductListFull] = useState([])
    const [cartProductList, setCartProductList] = useState([])
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

    const addProductCart = (product) => {
        const addProduct = [...cartProductListFull, product]
        setCartProductListFull(addProduct)
        toast("Produto adicionado ao carrinho")
        
        if (!cartProductList.some((e) => e.id == product.id)) {
            const addProductCartList = [...cartProductList, product]   
            setCartProductList(addProductCartList)
        }
    }

    const priceCart = () => {
        const sumPrice = (total, product) => {
            return total + (product.price);
        }
        
        let total = cartProductListFull.reduce(sumPrice, 0);
        return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    const quantityProductCart = (id) => {
        const quantity = cartProductListFull.filter((product) => {
            return product.id == id
        })
        return quantity.length
    }

    const removeProductCart = (id) => {
        const newCartProductListFull = [...cartProductListFull]
        const indexCartListFull = newCartProductListFull.findIndex((product) => product.id === id)
        newCartProductListFull.splice(indexCartListFull, 1)
        setCartProductListFull(newCartProductListFull)

        if(quantityProductCart(id) === 1) {
            const newCartProductList = [...cartProductList]
            const indexCartList = newCartProductList.findIndex((product) => product.id === id)
            newCartProductList.splice(indexCartList, 1)
            setCartProductList(newCartProductList)
        }
    }

    return (
        <ProductContext.Provider value={{ productList, renderProducts, product, setProduct, loadProducts, filteredProductList, addProductCart, cartProductList, priceCart, quantityProductCart, removeProductCart, cartProductListFull }} >
            {children}
        </ProductContext.Provider>
    )
}