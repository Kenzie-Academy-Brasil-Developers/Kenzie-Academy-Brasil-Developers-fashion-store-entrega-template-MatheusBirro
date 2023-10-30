import { Footer } from "../../Footer"
import { Header } from "../../Header"

export const TemplatePageAuthenticated = ({children}) => {
    return(
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}