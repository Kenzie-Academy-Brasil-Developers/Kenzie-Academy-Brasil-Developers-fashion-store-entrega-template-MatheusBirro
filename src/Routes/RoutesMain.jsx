import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { ProductPage } from "../Pages/ProductPage"
import { RegisterPage } from "../Pages/RegisterPage"


export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}