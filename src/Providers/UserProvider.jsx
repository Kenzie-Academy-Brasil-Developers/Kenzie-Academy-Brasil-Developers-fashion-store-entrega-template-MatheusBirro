import { createContext } from "react"
import { FashionStoreApi } from "../Services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const navigate = useNavigate()

    const UserLogin = async (payload, setLoading) => {
        try {
            setLoading(true)
            const {data} = await FashionStoreApi.post("/login", payload)
            localStorage.setItem("@tokenUser", JSON.stringify(data.accessToken))
            navigate("/adminHome")
            toast("Logado com sucesso!")
        } catch (error) {
            if (error.request.response === `"Cannot find user"`) {
                toast.error("Email não cadastrado")
            }else if (error.request.response === `"Incorrect password"`) {
                toast.error("Senha incorreta")
            }else{
                toast.error("Ops! Algo deu errado")
            }
        }
        finally{
            setLoading(false)
        }
    }

    const UserRegister = async (payload, setLoading) => {
        try {
            setLoading(true)
            const {data} = await FashionStoreApi.post("/users", payload)
            navigate("/login")
            toast("Conta criada com sucesso!")
        } catch (error) {
            if (error.request.response === "Email already exists") {
                toast.error("Email já cadastrado")
            }else{
                toast.error("Ops! Algo deu errado")
            }
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <UserContext.Provider value={{UserLogin, UserRegister}} >
            {children}
        </UserContext.Provider>
    )
}