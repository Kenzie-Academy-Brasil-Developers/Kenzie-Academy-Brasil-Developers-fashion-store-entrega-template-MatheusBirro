import { createContext, useState } from "react"
import { FashionStoreApi } from "../Services/api"
import { toast } from "react-toastify"

export const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [filteredProductList, setFilteredProductList] = useState([])
    const [cartProductListFull, setCartProductListFull] = useState(JSON.parse(localStorage.getItem('@cartFashionStoreFull'))? JSON.parse(localStorage.getItem('@cartFashionStoreFull')): [])
    const [cartProductList, setCartProductList] = useState(JSON.parse(localStorage.getItem('@cartFashionStore'))? JSON.parse(localStorage.getItem('@cartFashionStore')):[])
    const [product, setProduct] = useState({})

    const loadProducts = async ({setLoading}) => {
        setLoading(true)
        try {
            const { data } = await FashionStoreApi.get("/products")
            setProductList(data)
            setFilteredProductList(data)
        } catch (error) {
            console.log(error);
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
        localStorage.setItem("@cartFashionStoreFull", JSON.stringify(addProduct))
        toast("Produto adicionado ao carrinho")
        
        if (!cartProductList.some((e) => e.id == product.id)) {
            const addProductCartList = [...cartProductList, product]   
            setCartProductList(addProductCartList)
            localStorage.setItem("@cartFashionStore", JSON.stringify(addProductCartList))
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
        localStorage.setItem("@cartFashionStoreFull", JSON.stringify(newCartProductListFull))
        if(quantityProductCart(id) === 1) {
            const newCartProductList = [...cartProductList]
            const indexCartList = newCartProductList.findIndex((product) => product.id === id)
            newCartProductList.splice(indexCartList, 1)
            setCartProductList(newCartProductList)
            localStorage.setItem("@cartFashionStore", JSON.stringify(newCartProductList))
        }
    }

    const createProduct = async ( payload, setCreateIsOpen ) =>  {
        const token = JSON.parse(localStorage.getItem('@tokenUser')) 
        const headers = { 
            'Authorization': `Bearer ${token}`,
        };
        const newProduct = payload;
        try {
            const {data} = await FashionStoreApi.post(`/products`, newProduct, {headers})
            setProductList([...productList, data])
            toast("Produto add com sucesso")
            setCreateIsOpen(false)
        } catch (error) {
            toast("Erro ao add o produto")
        }
    }

    const updateProduct = async (payload, setLoading, id, setEditIsOpen) => {
        const token = JSON.parse(localStorage.getItem('@tokenUser')) 
        const headers = { 
            'Authorization': `Bearer ${token}`,
        };
        const body = payload;
        try {
            setLoading(true)
            await FashionStoreApi.put(`/products/${id}`,body , {headers})
            toast("Produto editado com sucesso")
        } catch (error) {
            toast("Erro ao editar o produto")
        }
        finally{
            setLoading(false)
            setEditIsOpen(false)
        }
    }

    const deleteProduct = async (id, setLoading) =>  {
        const token = JSON.parse(localStorage.getItem('@tokenUser')) 
        const headers = { 
            'Authorization': `Bearer ${token}`,
        };
        try {
            await FashionStoreApi.delete(`/products/${id}`, {headers})
            const newProductList = productList.filter((product)=> product.id !== id)
            setProductList(newProductList)
            toast("Produto deletado com sucesso")
        } catch (error) {
            toast("Erro ao deletar o produto")
        } finally{
            setLoading(false) 
        }
    }

    return (
        <ProductContext.Provider value={{ productList, renderProducts, product, setProduct, loadProducts, filteredProductList, addProductCart, cartProductList, priceCart, quantityProductCart, removeProductCart, cartProductListFull, deleteProduct, createProduct , updateProduct , setCartProductListFull, setCartProductList}} >
            {children}
        </ProductContext.Provider>
    )
}