import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { ProductPage } from "../Pages/ProductPage"
import { RegisterPage } from "../Pages/RegisterPage"
import { useContext } from "react"
import { ProductContext } from "../Providers/ProductsProvider"
import { AdminProductPage } from "../Pages/AdminProductPage"
import { AdminHomePage } from "../Pages/AdminHomePage"
import { ProtectedAdminRoutes } from "../Components/protectedRoutes"


export const RoutesMain = () => {
    const { product } = useContext(ProductContext)

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/product/${product.name}`} element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/adminHome" element={<ProtectedAdminRoutes />}>
                <Route index element={<AdminHomePage />} />
            </Route>

            <Route path="/addProduct" element={<ProtectedAdminRoutes />}>
                <Route index element={<AdminProductPage />} />
            </Route>
        </Routes>
    )
}