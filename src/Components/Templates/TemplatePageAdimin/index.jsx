import { useNavigate } from "react-router-dom";
import { Footer } from "../../Footer"
import { HeaderUnauthenticated } from "../../Headers/HeaderUnauthenticated";
import styles from "./styles.module.scss";

export const TemplateAdminPage = ({children}) => {
    const navigate = useNavigate()

    return(
        <>
            <HeaderUnauthenticated />
            <nav className={styles.menu__container}>
                <button onClick={()=>{navigate("/adminHome")}}>INÍCIO</button>
                <button onClick={()=>{navigate("/addProduct")}}>PRODUTOS</button>
            </nav>
            {children}
            <Footer />
        </>
    )
}