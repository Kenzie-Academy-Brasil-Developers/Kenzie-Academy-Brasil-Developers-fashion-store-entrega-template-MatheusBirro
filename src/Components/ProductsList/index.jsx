import { useEffect, useState } from "react"
import { FashionStoreApi } from "../../Services/api"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {

    const [productList, setProductList] = useState([])

    useEffect( () => {
        const LoadProducts = async() =>{
            const {data} = await FashionStoreApi.get("/products")
            setProductList(data)
        }
        LoadProducts() 
    },[])

    return(
        <ul>
            {productList.map((product)=>{
                return(
                    <ProductCard key={product.id} product={product}/>
                )
            })}
        </ul>
    )
}