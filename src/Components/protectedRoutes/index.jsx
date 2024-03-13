import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../Providers/UserProvider"

export const ProtectedAdminRoutes = () => {
    const {adminProfile} = useContext(UserContext)
    return Object.keys(adminProfile).length !== 0 ? <Outlet/> : <Navigate to="/" />
}

